import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { LogsService } from 'app/shared/services/logs.service';
import { RequestService } from 'app/shared/services/request.service';
import { LogHistoryModelComponent } from 'app/views/Models/log-history-model/log-history-model.component';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LogReportsService } from 'app/shared/services/logs-reports.service';
import * as moment from 'moment';

@Component({
  selector: 'app-logs-history',
  templateUrl: './logs-reports.component.html',
  styleUrls: ['./logs-reports.component.css']
})
export class LogsReportsComponent implements OnInit {
  [x: string]: any;
  items: any;
  spinner = false;
  paginationCount: any;
  pagedatainfo: any;
  Countresult = [];

  currentPage : any;
  searchedDate: string;
  gridCols = 2;
  constructor(private logsService: LogReportsService, private jwtauth: JwtAuthService, private requestservice: RequestService,  private dialog: MatDialog, private breakpointObserver: BreakpointObserver,) { }

  ngOnInit(): void {

    this.breakpointObserver.observe(['(max-width: 599px)']) // 👈 custom mobile-only query
      .subscribe(result => {
        this.gridCols = result.matches ? 1 : 2;
      });

    this.currentPage = 1;

    this.startValue = 1;
    this.getPermits(this.currentPage, this.startValue);

  }

  isValidDateFormat(date: string | null | undefined): boolean {
    if (!date) return false; // Handle null, undefined, and empty string
    return /^\d{4}-\d{2}-\d{2}$/.test(date) && date !== '0000-00-00';
  }
  

getPermits(page, value) {
  this.spinner = true;
  this.pagedatainfo = {
    Start: value,
    End: 30,
    Page: page,
    timestamp: this.searchedDate || null   // 👈 pass null if no date selected
  };

  this.logsService.logreports(this.pagedatainfo).subscribe((res: any) => {
    this.spinner = false;
    if (res && res[0]?.data?.length > 0) {
      this.items = res[0].data.map(log => {
        let parsedUser: any = {};
        try {
          parsedUser = JSON.parse(log.user);
        } catch (e) {
          parsedUser = { displayName: log.user };
        }
        return { ...log, user: parsedUser };
      });
      this.paginationCount = res[1]?.count || 0;
      this.Filtertab = true;
    } else {
      this.items = [];
      this.Filtertab = false;
    }
  });
}

parseBody(body: string): any {
  try {
    return JSON.parse(body);
  } catch (e) {
    return {}; // return empty if invalid JSON
  }
}


onPagination(event) {
  this.Countresult.length = 0;
  this.currentPage = event.page;
  let start;
  let offset = event.page - 1;

  if (offset === 0) {
    start = 1;
  } else {
    start = offset * 30 + 1;
  }

  this.pagedatainfo = {
    Start: start,
    End: 30,
    Page: this.currentPage,
    timestamp: this.searchedDate || null   // 👈 keep date filter on page change
  };

  this.spinner = true;
  this.logsService.logreports(this.pagedatainfo).subscribe((res: any) => {
    this.spinner = false;
    if (res && res[0]?.data?.length > 0) {
      this.items = res[0].data;
      this.paginationCount = res[1]?.count || 0;
      this.Filtertab = true;
    } else {
      this.items = [];
      this.Filtertab = false;
    }
  });
}


onDateChange(event: any) {
  this.searchedDate = moment(event.value).format("YYYY-MM-DD");
  this.currentPage = 1;
  this.startValue = 1;
  this.getPermits(this.currentPage, this.startValue);
}


}

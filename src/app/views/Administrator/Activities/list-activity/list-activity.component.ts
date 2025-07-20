import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'app/shared/services/activity.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivityComponent } from '../activity/activity.component';
import { DeleteOptionComponent } from '../../delete-option/delete-option.component';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  public items: any[];
  spinner:boolean=false;

  constructor(private deptservice:ActivityService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.GetAllDepartments();
  }

  GetAllDepartments() {
    this.spinner=true;

    this.deptservice.GetAllActivites().subscribe(res => {
      this.spinner=false;
      this.items = res["data"];
    });
  }
  EditDepart(row) {
    let title = 'Edit Activity';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ActivityComponent, {
      width: '1200px',
      height: '600px',
      disableClose: false,
      data: { title: title, payload: row, editform: true }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllDepartments();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }

  DeleteActivity(row)
  {
    let title = 'Delete Activity';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DeleteOptionComponent, {
      width: '300px',
      height: '150px',
      disableClose: false,
      data: { title: title, payload: row, type: "activity" }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllDepartments();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }

  

}


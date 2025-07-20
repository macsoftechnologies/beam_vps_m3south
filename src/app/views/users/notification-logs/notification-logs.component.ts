import { Component, OnInit, Optional, Inject } from '@angular/core';
import { RequestService } from 'app/shared/services/request.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestsbyId } from 'app/views/Models/RequestDto';

@Component({
  selector: 'app-notification-logs',
  templateUrl: './notification-logs.component.html',
  styleUrls: ['./notification-logs.component.css']
})
export class NotificationLogsComponent implements OnInit {

  logsData:any[]=[];
  spinner:boolean=false;

  reqId: RequestsbyId =
  {
    userId: null
  }
  constructor(private reqstService:RequestService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any[]) {
    
   
   }

  ngOnInit(): void {
     this.spinner=true;
    this.reqId.userId=this.data["payload"]["id"];
    this.reqstService.GetRequestsLogs(this.reqId).subscribe(res=>
      {
        if(!res["message"])
        {
          this.logsData=res["data"];
        console.log(this.logsData);
        }
        this.spinner=false;

      });
  }

}

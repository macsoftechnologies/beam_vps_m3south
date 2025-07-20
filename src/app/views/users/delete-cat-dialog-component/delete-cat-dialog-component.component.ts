import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'app/shared/services/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-cat-dialog-component',
  templateUrl: './delete-cat-dialog-component.component.html',
  styleUrls: ['./delete-cat-dialog-component.component.css']
})
export class DeleteCatDialogComponentComponent implements OnInit {
  activityName: any;

  constructor(private router: Router, private RequestService: RequestService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activityName = localStorage.getItem("activityname");
  }
  
  deleteActivity() {
    let deleteObj = {
      id : this.activityName
    }

    this.RequestService.deleteActivity(deleteObj).subscribe ((deleteResp) => {
      console.log(deleteResp, "Delete Response")
      this.snackBar.open("Activity Delete Successfully", 'close');
      this.RequestService.DeleteActivityEmitter.emit(true)
      // window.location.reload();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { SafetyprecautionService } from 'app/shared/services/safetyprecautionservice';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SafetyprecautionComponent } from '../safetyprecaution/safetyprecaution.component';
import { DeleteOptionComponent } from '../../delete-option/delete-option.component';

@Component({
  selector: 'app-list-safetyprecaution',
  templateUrl: './list-safetyprecaution.component.html',
  styleUrls: ['./list-safetyprecaution.component.css']
})
export class ListSafetyprecautionComponent implements OnInit {

  public items: any[];
  spinner:boolean=false;

  constructor(private precautionservice:SafetyprecautionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.GetAllSafetyprecaution();
  }

  GetAllSafetyprecaution() {
    this.spinner=true;

    this.precautionservice.GetSafetyprecautions().subscribe(res => {
      this.spinner=false;
      this.items = res["data"];
    });
  }
  EditDepart(row) {
    let title = 'Edit precautions';
    let dialogRef: MatDialogRef<any> = this.dialog.open(SafetyprecautionComponent, {
      width: '1000px',
     
      disableClose: false,
      data: { title: title, payload: row, editform: true }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllSafetyprecaution();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }

  DeleteActivity(row)
  {
    let title = 'Delete precautions';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DeleteOptionComponent, {
      width: '300px',
      height: '150px',
      disableClose: false,
      data: { title: title, payload: row, type: "safety" }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllSafetyprecaution();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }


}

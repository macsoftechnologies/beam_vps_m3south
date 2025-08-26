import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteOptionComponent } from '../../delete-option/delete-option.component';
import { MechanicalworkService } from 'app/shared/services/mechanicalworks.service';
import { MechanicalworkComponent } from '../mechanicalworks/mechanicalworks.component';

@Component({
  selector: 'app-list-mechanicalworks',
  templateUrl: './list-mechanicalworks.component.html',
  styleUrls: ['./list-mechanicalworks.component.css']
})
export class ListMechanicalWorkComponent implements OnInit {

  public items: any[];
  spinner:boolean=false;

  constructor(private mechanicalworksservice:MechanicalworkService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.GetAllMechanicalworks();
  }

  GetAllMechanicalworks() {
    this.spinner=true;

    this.mechanicalworksservice.GetMechanicalworks().subscribe(res => {
      this.spinner=false;
      this.items = res["data"];
    });
  }
  EditMechanicalWork(row) {
    let title = 'Edit mechanicalworks';
    let dialogRef: MatDialogRef<any> = this.dialog.open(MechanicalworkComponent, {
      width: '1000px',
     
      disableClose: false,
      data: { title: title, payload: row, editform: true }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllMechanicalworks();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }

  DeleteActivity(row)
  {
    let title = 'Delete Mechanical Works';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DeleteOptionComponent, {
      width: '300px',
      height: '150px',
      disableClose: false,
      data: { title: title, payload: row, type: "mechanicalwork" }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllMechanicalworks();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }


}

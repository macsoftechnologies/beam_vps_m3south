import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteOptionComponent } from '../../delete-option/delete-option.component';
import { ElectricalworkComponent } from '../electricalworks/electricalworks.component';
import { ElectricalworkService } from 'app/shared/services/electricalworks.service';

@Component({
  selector: 'app-list-electricalworks',
  templateUrl: './list-electricalworks.component.html',
  styleUrls: ['./list-electricalworks.component.css']
})
export class ListElectricalWorkComponent implements OnInit {

  public items: any[];
  spinner:boolean=false;

  constructor(private electricalworksservice:ElectricalworkService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.GetAllElectricalworks();
  }

  GetAllElectricalworks() {
    this.spinner=true;

    this.electricalworksservice.GetElectricalworks().subscribe(res => {
      this.spinner=false;
      this.items = res["data"];
    });
  }
  EditElectricalWork(row) {
    let title = 'Edit electricalworks';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ElectricalworkComponent, {
      width: '1000px',
     
      disableClose: false,
      data: { title: title, payload: row, editform: true }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllElectricalworks();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }

  DeleteActivity(row)
  {
    let title = 'Delete Electrical Works';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DeleteOptionComponent, {
      width: '300px',
      height: '150px',
      disableClose: false,
      data: { title: title, payload: row, type: "electricalwork" }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllElectricalworks();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }


}

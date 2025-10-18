import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteOptionComponent } from '../../delete-option/delete-option.component';
import { ZoneStatusService } from 'app/shared/services/zone-status.service';
import { ZoneStatusComponent } from '../zone-status/zone-status.component';
import { RequestService } from 'app/shared/services/request.service';

@Component({
  selector: 'app-list-electricalworks',
  templateUrl: './list-zone-status.component.html',
  styleUrls: ['./list-zone-status.component.css']
})
export class ListZoneStatusComponent implements OnInit {

  public items: any[];
  Buildings: any = [];
  spinner:boolean=false;

  constructor(private zonestatusservice:ZoneStatusService, private requestservice: RequestService, private dialog: MatDialog) {
    this.requestservice.GetAllSites().subscribe(res => {
      this.GetBuilding(res["data"][1]["site_id"]);
    });
   }

  ngOnInit(): void {
    this.GetAllZones();
  }
    GetBuilding(event) {
    this.requestservice.GetAllBuildingsbyid(event).subscribe(res => {
      this.Buildings = res["data"];
    });
  }

  getBuildingName(id: string) {
  const building = this.Buildings.find(b => b.build_id === id);
  return building ? building.building_name : id; // fallback to id
}


  GetAllZones() {
    this.spinner=true;

    this.zonestatusservice.GetZoneStatus().subscribe(res => {
      this.spinner=false;
      this.items = res["data"];
    });
  }
  EditZonestatus(row) {
    let title = 'Edit Zone status';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ZoneStatusComponent, {
      width: '1000px',
     
      disableClose: false,
      data: { title: title, payload: row, editform: true }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllZones();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }

  DeleteZone(row)
  {
    let title = 'Delete Zone';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DeleteOptionComponent, {
      width: '300px',
      height: '150px',
      disableClose: false,
      data: { title: title, payload: row, type: "zonestatus" }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllZones();
        if (!res) {

          // If user press cancel
          return;
        }
      })
  }


}

import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'app/shared/services/employee.service';
import { TeamService } from 'app/shared/services/team.service';
import { ExportExcelService } from 'app/shared/services/export-excel.service';

@Component({
  selector: 'app-team-sub-emp-list',
  templateUrl: './team-sub-emp-list.component.html',
  styleUrls: ['./team-sub-emp-list.component.css']
})
export class TeamSubEmpListComponent implements OnInit {

  subcontrs:any[]=[];
  teamid:string="";
  emps:any[]=[];
  spinner:boolean=false;
  DownloadExcelData: any[]=[];
  dataForExcel: any[]=[];

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any[],public ete: ExportExcelService,
  private empservice:EmployeeService, private teamservice:TeamService) {

   }

  ngOnInit(): void {
    this.spinner=true;
  //  this.empservice.GetAllEmployeesBySubContrId(this.data["payload"]["subContId"]).subscribe(res=>
  //   {
  //     this.emps=res["data"];
  //     this.spinner=false;
  //   });
  this.teamservice.GetAllTeamsById(Number.parseInt(this.data["payload"]["id"])).subscribe(res => {
    let empslist = res["employeeIds"].split(",");
    let selectedempsList=[];
    this.empservice.GetAllEmployees().subscribe(x => {
      let allemps = [];
      allemps = x["data"];
      allemps.forEach(x => {
        empslist.forEach(y => {
          if (y == x["id"]) {
            selectedempsList.push(x);
          }
        });
      });
      this.emps=selectedempsList;
      this.spinner = false;
    });
  });
}

exportToExcel() {

  this.emps.forEach(x=>
    {
      this.DownloadExcelData.push(
        {EmployeeName:x["employeeName"],BadgeId:x["badgeId"],
        Designation:x["designation"],PhoneNumber:x["phonenumber"]}
      )
    });

  this.DownloadExcelData.forEach((row: any) => {
    this.dataForExcel.push(Object.values(row))
  });

  let reportData = {
    title: 'Employees Data',
    data: this.dataForExcel,
    headers: Object.keys(this.DownloadExcelData[0])
  }

  this.ete.exportExcel(reportData);
}
}

import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubcontractorService } from 'app/shared/services/subcontractor.service';
import { EmployeeService } from 'app/shared/services/employee.service';
import { ExportExcelService } from 'app/shared/services/export-excel.service';

@Component({
  selector: 'app-list-sub-emp',
  templateUrl: './list-sub-emp.component.html',
  styleUrls: ['./list-sub-emp.component.css']
})
export class ListSubEmpComponent implements OnInit {

  EmpList: any[] = [];
  spinner = false;
  DownloadExcelData: any[]=[];
  dataForExcel: any[]=[];
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any[],
  private empservice:EmployeeService, public ete: ExportExcelService) { }

  ngOnInit(): void {
    this.spinner = true;
    this.empservice.GetAllEmployeesBySubContrId(this.data["payload"]["id"]).subscribe(res=>
      {
        this.spinner = false;
        this.EmpList = res["data"];
      });
  }

  exportToExcel() {

    this.EmpList.forEach(x=>
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

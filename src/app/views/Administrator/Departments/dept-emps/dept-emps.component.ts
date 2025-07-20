import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'app/shared/services/employee.service';
import { DeptWiseEmps } from 'app/views/Models/DepartmentDto';

@Component({
  selector: 'app-dept-emps',
  templateUrl: './dept-emps.component.html',
  styleUrls: ['./dept-emps.component.css']
})
export class DeptEmpsComponent implements OnInit {

  EmpList: any[] = [];
  spinner = false;
  deptid:DeptWiseEmps={
    departId:null
  }
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any[],private empservice:EmployeeService) { }

  ngOnInit(): void {
    this.spinner = true;
    this.deptid.departId=this.data["payload"]["id"];
    this.empservice.GetAllEmployeesByDeptId(this.deptid).subscribe(res=>
      {
        this.spinner = false;
        this.EmpList = res["data"];
      });
  }

}

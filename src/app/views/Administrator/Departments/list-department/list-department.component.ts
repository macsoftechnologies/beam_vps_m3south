import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { DepartmentService } from 'app/shared/services/department.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DepartmentComponent } from '../department/department.component';
import { DeleteOptionComponent } from '../../delete-option/delete-option.component';
import { DeptEmpsComponent } from '../dept-emps/dept-emps.component';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  public items: any[];
  spinner:boolean=false;

  constructor(private deptservice: DepartmentService, private dialog: MatDialog) {
    //this.items = this.deptservice.Departments;
  }

  ngOnInit(): void {
    this.GetAllDepartments();
  }

  GetAllDepartments() {
    this.spinner=true;

    this.deptservice.GetAllDepartments().subscribe(res => {
      this.items = res["data"];
      this.spinner=false;

    });
  }
  EditDepart(row) {
    let title = 'Edit Department';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DepartmentComponent, {
      width: '1000px',
      height: '300px',
      disableClose: false,
      data: { title: title, payload: row, editform: true }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllDepartments();
      })
  }

  DeleteDepart(row)
  {
    let title = 'Delete Department';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DeleteOptionComponent, {
      width: '300px',
      height: '150px',
      disableClose: false,
      data: { title: title, payload: row, type: "dept" }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.GetAllDepartments();
      });
    }
 
    onActivate(event) {
      // console.log('active', event);
      if (event.type == 'click') {
        let title = 'Employees List By Departments';
        let dialogRef: MatDialogRef<any> = this.dialog.open(DeptEmpsComponent, {
          width: '1000px',
          
          disableClose: false,
          data: { title: title, payload: event.row }
        })
        dialogRef.afterClosed()
          .subscribe(res => {
          });
      }
    }
}

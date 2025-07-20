import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentDto, UpdateDepartmentDto } from 'app/views/Models/DepartmentDto';
import { DepartmentService } from 'app/shared/services/department.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  DepartmentForm: FormGroup;
  editform:boolean=false;
  spinner:boolean=false;

  depart:DepartmentDto=
  {
    departmentName:null
  }
  updatedepart:UpdateDepartmentDto=
  {
    id:0,
    departmentName:null
  }
  constructor(private fb: FormBuilder, private deptservice: DepartmentService,private _snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any[], 
    ) { 

      this.DepartmentForm = this.fb.group({
        DeptId: ['', [Validators.required]],
        DeptName: ['', Validators.required]
      });
    }

  ngOnInit(): void {
 
    if (this.data != null && this.data["editform"] == true) {
      this.editform = true;
      this.DepartmentForm.controls["DeptId"].setValue(this.data["payload"]["id"]);
      this.DepartmentForm.controls["DeptName"].setValue(this.data["payload"]["departmentName"])
    }
    
  }
  Createdept() {
    this.spinner=true;

    this.depart.departmentName=this.DepartmentForm.controls['DeptName'].value;
    this.deptservice.CreateDepartment(this.depart).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Department Created Successfully");
        this.DepartmentForm.reset();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
      }
      );    
  }
  Updatedept()
  {
    this.spinner=true;

    this.updatedepart.id=this.DepartmentForm.controls["DeptId"].value;
    this.updatedepart.departmentName=this.DepartmentForm.controls["DeptName"].value;
    this.deptservice.UpdateDepartment(this.updatedepart).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Department updated Successfully");
        //this.closeDialog();
      //  this.DepartmentForm.reset();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
      }
    )
  }
  
  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,

    });
  }
  // closeDialog(){
  //   this.dialogRef.close();
  // }
}

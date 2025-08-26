// import { Component, OnInit, Optional, Inject, NgZone, ElementRef, ViewChild } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { UserService } from 'app/shared/services/user.service';
// import { DepartmentService } from 'app/shared/services/department.service';
// import { EmployeesDto, UpdateEmployeesDto, EmployeeSubDto, EmployeeDeptDto, UpdateEmployeeSubDto, UpdateEmployeeDeptDto, Employee, UpdateEmployee } from 'app/views/Models/EmployeesDto';
// import { EmployeeService } from 'app/shared/services/employee.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { SubcontractorService } from 'app/shared/services/subcontractor.service';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { validateBasis } from '@angular/flex-layout';
// import { forkJoin, fromEvent } from 'rxjs';
// import { UniqueUser } from 'app/views/Models/UniqueUserDto';
// import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css']
// })
// export class EmployeeComponent implements OnInit {
//   spinner: boolean = false;
//   @ViewChild('username') yourElement: ElementRef;

//   _timeout: any = null;
//   IsNameunique: string = "";
//   EmployeeForm: FormGroup;
//   Departments: any[] = [];
//   SubContractor: any[] = [];
//   Roles: any[] = [];
//   radioselectvalname: string = "Subcontractor";
//   selectedradioval = "Select Type";
//   IsObserver: boolean = true;

//   SubContact: boolean = true;
//   Depart: boolean = true;
//   Company: any;

//   radiooptions: any[] =
//     [
//       { name: "Select Type" },
//       { name: "Department" },
//       { name: "Subcontractor" },
//       // { name: "Contractor" },
//       { name: "Observer" }
//     ];
//   useraccess: boolean = false;
//   editform: boolean = false;

//   unqUser: UniqueUser =
//     {
//       username: null
//     }

//   Empdata: EmployeesDto = {
//     roleId: null,
//     departId: null,
//     badgeId: null,
//     phonenumber: null,
//     employeeName: null,
//     designation: null,
//     subContId: null,
//     username: null,
//     password: null,
//     companyName: null,
//     email: null,
//     access: "1"
//   }
//   UpdateEmpdata: UpdateEmployeesDto = {
//     id: null,
//     roleId: null,
//     departId: null,
//     badgeId: null,
//     phonenumber: null,
//     employeeName: null,
//     designation: null,
//     subContId: null,
//     username: null,
//     password: null,
//     companyName: null,
//     email: null,
//     access: "0"
//   }
//   empwithsub: EmployeeSubDto =
//     {
//       roleId: null,
//       badgeId: null,
//       phonenumber: null,
//       employeeName: null,
//       designation: null,
//       subContId: null,
//       username: null,
//       password: null,
//       companyName: null,
//       email: null,
//       access: "1"
//     }

//   empwithdept: EmployeeDeptDto =
//     {
//       roleId: null,
//       departId: null,
//       badgeId: null,
//       phonenumber: null,
//       employeeName: null,
//       designation: null,
//       username: null,
//       password: null,
//       companyName: null,
//       email: null,
//       access: "1"
//     }

//   UpdateEmpsubdata: UpdateEmployeeSubDto = {
//     id: null,
//     roleId: null,
//     badgeId: null,
//     phonenumber: null,
//     employeeName: null,
//     designation: null,
//     subContId: null,
//     username: null,
//     password: null,
//     companyName: null,
//     email: null,
//     access: "0"
//   }

//   UpdateEmpdeptdata: UpdateEmployeeDeptDto = {
//     id: null,
//     departId: null,
//     roleId: null,
//     badgeId: null,
//     phonenumber: null,
//     employeeName: null,
//     designation: null,
//     username: null,
//     password: null,
//     companyName: null,
//     email: null,
//     access: "0"
//   }

//   emp: Employee =
//     {
//       roleId: null,
//       typeId: null,
//       type: null,
//       badgeId: null,
//       employeeName: null,
//       designation: null,
//       phonenumber: null,
//       access: "1",
//       username: null,
//       companyName: null,
//       email: null,
//       password: null
//     }
//   updateemp: UpdateEmployee =
//     {
//       id: null,
//       roleId: null,
//       typeId: null,
//       type: null,
//       badgeId: null,
//       employeeName: null,
//       designation: null,
//       phonenumber: null,
//       access: "1",
//       username: null,
//       companyName: null,
//       email: null,
//       password: null
//     }
//      gridCols = 2;

//   // EmpDto:Employee
//   // {
//   //   roleId:null,
//   //   typeId:null,
//   //   type:null,
//   //   badgeId:null

//   // }
//   //Departmentcontrol = new FormControl(this.Departments[1].value);

//   constructor(private fb: FormBuilder, private empservice: EmployeeService,
//     private suctservice: SubcontractorService, @Optional() @Inject(MAT_DIALOG_DATA) public data: any[],private breakpointObserver: BreakpointObserver,
//     private deptservice: DepartmentService, private _snackBar: MatSnackBar) {
//     //this.spinner=true;
//     // this.deptservice.GetAllDepartments().subscribe(res => {
//     //   this.Departments = res["data"];
//     // });
//     // this.suctservice.GetAllSubContractors().subscribe(res => {
//     //   this.SubContractor = res["data"];
//     // })
//     // this.deptservice.GetAllRoles().subscribe(res => {
//     //   this.Roles = res["data"];
//     // });
//     this.spinner = true;

//     forkJoin(this.deptservice.GetAllDepartments(), this.suctservice.GetAllSubContractors(),
//       this.deptservice.GetAllRoles()).subscribe(res => {
//         this.spinner = false;

//         this.Departments = res[0]["data"];
//         this.SubContractor = res[1]["data"];
//         this.Roles = res[2]["data"];
//       });
//   }

//   ngOnInit(): void {

//      this.breakpointObserver.observe(['(max-width: 599px)']) // 👈 custom mobile-only query
//       .subscribe(result => {
//         this.gridCols = result.matches ? 1 : 2;
//       });

//     this.useraccess = true;
//     this.EmployeeForm = this.fb.group({
//       badge: ['',],
//       EmpName: ['', ],
//       Role: ['', ],
//       EmpDept: ['', ],
//       subcontrid: ['', ],
//       Designation: ['', ],
//       PhonenNumber: ['', Validators.required],
//       username: ['',],
//       password: ['',],
//       companyName: ['',],
//       email: ['',],
//       options: ['Select Type']
//     });

//     if (this.data != null && this.data["editform"] == true) {
//       this.editform = true;
//       console.log(this.data["payload"]);
//       this.EmployeeForm.controls["EmpName"].setValue(this.data["payload"]["employeeName"]);
//       this.EmployeeForm.controls["Designation"].setValue(this.data["payload"]["designation"]);
//       this.EmployeeForm.controls["badge"].setValue(this.data["payload"]["badgeId"]);
//       this.EmployeeForm.controls["PhonenNumber"].setValue(this.data["payload"]["phonenumber"]);
//       this.EmployeeForm.controls["username"].setValue(this.data["payload"]["username"]);
//       this.EmployeeForm.controls["companyName"].setValue(this.data["payload"]["companyName"]);
//       this.EmployeeForm.controls["email"].setValue(this.data["payload"]["email"]);
//       this.EmployeeForm.controls["password"].setValue(atob(this.data["payload"]["password"]));

//       this.EmployeeForm.controls["EmpDept"].setValue(this.data["payload"]["departId"]);
//       this.EmployeeForm.controls["Role"].setValue(this.data["payload"]["roleId"]);
//       this.EmployeeForm.controls["subcontrid"].setValue(this.data["payload"]["subContId"]);
//       this.UpdateEmpsubdata.access = this.data["payload"]["access"];
//       this.updateemp.access = this.data["payload"]["access"];
//       this.updateemp.id = this.data["payload"]["id"];
//       if (this.data["payload"]["access"] == "1") {
//         this.useraccess = true;

//       }
//       else {
//         this.useraccess = false;
//       }

//       if (this.data["payload"]["obserId"] != null) {
//         this.EmployeeForm.controls["options"].setValue("Observer");
//         this.selectedradioval = "Observer";
//         this.Company = this.data["payload"]["companyName"]
//       }
//       else if (this.data["payload"]["subContId"] == null || this.data["payload"]["subContId"] == "" || this.data["payload"]["subContId"] == "0") {
//         this.EmployeeForm.controls["options"].setValue("Department");
//         this.selectedradioval = "Department";
//         this.Company = this.data["payload"]["companyName"]

//       }
//       else {
//         this.EmployeeForm.controls["options"].setValue("Subcontractor");
//         this.Depart = true;
//         this.SubContact = false;
//         this.selectedradioval = "Subcontractor";
//       }

//     }
//   }



//   public searchusername() {

//     this.unqUser.username = this.EmployeeForm.controls["username"].value;
//     this.empservice.CheckUsername(this.unqUser).subscribe(data => {
//       console.log(data);
//       this.IsNameunique = data["message"];
//     });
//   }

//   radioChange(event) {
//     if (event.value === 'Subcontractor') {
//       // this.emp.companyName = '';
//       console.log(event)
//       this.selectedradioval = "Subcontractor";
//       this.IsObserver = true;
//       this.Depart = true;
//       this.SubContact = false;
//     }
//     else if (event.value === 'Department') {
//       this.selectedradioval = "Department";
//       this.IsObserver = true;
//       this.Depart = true;
//       this.SubContact = true;
//       this.Company = 'NNE'
//     }
//     else if (event.value === 'Observer') {
//       this.selectedradioval = "Observer";
//       this.IsObserver = false;
//       this.Depart = true;
//       this.SubContact = true;
//       this.Company = ''
//     }
//   }
//   toggle(event) {
//     this.useraccess = event.checked;

//     if (this.useraccess == true) {
//       this.emp.access = "1";
//       this.updateemp.access = "1";
//       this.updateemp.access = this.Empdata.access;

//     }
//     else if (this.useraccess == false) {
//       this.emp.access = "0";
//       this.updateemp.access = "0";
//       this.UpdateEmpsubdata.access = this.Empdata.access;

//     }
//   }


//   CreateEmp() {
//     console.log(this.EmployeeForm.value),
//     (Object as any).keys(this.EmployeeForm.controls).forEach((control) => {
//       this.EmployeeForm.get(`${control}`).markAsTouched();
//     });

//     if (this.EmployeeForm.valid) {
//       this.emp.phonenumber = this.EmployeeForm.controls["PhonenNumber"].value;
//       this.emp.roleId = this.EmployeeForm.controls["Role"].value;
//       this.emp.badgeId = this.EmployeeForm.controls["badge"].value;
//       this.emp.employeeName = this.EmployeeForm.controls["EmpName"].value;
//       this.emp.companyName = this.EmployeeForm.controls["companyName"].value;
//       this.emp.email = this.EmployeeForm.controls["email"].value;
//       this.emp.designation = this.EmployeeForm.controls["Designation"].value;
//       this.emp.username = this.EmployeeForm.controls["username"].value;
//       this.emp.password = this.EmployeeForm.controls["password"].value;
//       this.emp.type = this.selectedradioval;
//       console.log(this.selectedradioval)

//       if (this.selectedradioval == "Subcontractor") {
//         this.emp.typeId = this.EmployeeForm.controls["subcontrid"].value;
//         this.emp.companyName = ''
//       }
//       else if (this.selectedradioval == "Department") {
//         this.emp.typeId = this.EmployeeForm.controls["EmpDept"].value;
//       }
//       else if (this.selectedradioval == "Observer") {
//         this.emp.typeId = "1";
//       }

//       this.spinner = true;
//       this.empservice.CreateEmployees(this.emp).subscribe(res => {
//         if (res["status"] == 200) {
//           this.openSnackBar("Employee Created Successfully");
//           this.EmployeeForm.reset();
//         }
//         else {
//           this.openSnackBar(res["message"]);
//         }
//         this.spinner = false;
//       },
//         error => {
//           this.spinner = false;
//           this.openSnackBar("Something went wrong. Plz try again later...");
//         });
//     }
//   }

//   UpdateEmp() {
//     //this.spinner = true;

//     this.updateemp.roleId = this.EmployeeForm.controls["Role"].value;
//     this.updateemp.badgeId = this.EmployeeForm.controls["badge"].value;
//     this.updateemp.employeeName = this.EmployeeForm.controls["EmpName"].value;
//     this.updateemp.companyName = this.EmployeeForm.controls["companyName"].value;
//     this.updateemp.email = this.EmployeeForm.controls["email"].value;
//     this.updateemp.designation = this.EmployeeForm.controls["Designation"].value;
//     this.updateemp.phonenumber = this.EmployeeForm.controls["PhonenNumber"].value;
//     this.updateemp.username = this.EmployeeForm.controls["username"].value;
//     // this.EmployeeForm.controls["companyName"].setValue(this.data["payload"]["companyName"]);
//     this.updateemp.password = btoa(this.EmployeeForm.controls["password"].value);
//     this.updateemp.type = this.selectedradioval;

//     if (this.selectedradioval == "Subcontractor") {
//       this.updateemp.typeId = this.EmployeeForm.controls["subcontrid"].value;
//     }
//     else if (this.selectedradioval == "Department") {
//       this.updateemp.typeId = this.EmployeeForm.controls["EmpDept"].value;
//     }
//     else if (this.selectedradioval == "Observer") {
//       this.updateemp.typeId = "1";
//     }

//     this.empservice.UpdateEmployees(this.updateemp).subscribe(res => {

//       if (res["status"] == 200) {
//         this.openSnackBar("Employee updated Successfully");
//         this.EmployeeForm.reset();
//       }
//       else {
//         this.openSnackBar(res["message"]);
//       }
//       this.spinner = false;
//     },
//       error => {
//         this.spinner = false;
//         this.openSnackBar("Something went wrong. Plz try again later...");
//       });
//   }
//   openSnackBar(msg) {
//     this._snackBar.open(msg, "Close", {
//       duration: 2000,

//     });
//   }
//   ngAfterViewInit(): void {
//     fromEvent(this.yourElement.nativeElement, 'input')
//       .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
//       .pipe(debounceTime(1000))
//       .pipe(distinctUntilChanged())
//       .subscribe(data => this.searchusername()
//       );
//   }
// }

import { Component, OnInit, Optional, Inject, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'app/shared/services/user.service';
import { DepartmentService } from 'app/shared/services/department.service';
import { EmployeesDto, UpdateEmployeesDto, EmployeeSubDto, EmployeeDeptDto, UpdateEmployeeSubDto, UpdateEmployeeDeptDto, Employee, UpdateEmployee } from 'app/views/Models/EmployeesDto';
import { EmployeeService } from 'app/shared/services/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubcontractorService } from 'app/shared/services/subcontractor.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validateBasis } from '@angular/flex-layout';
import { forkJoin, fromEvent } from 'rxjs';
import { UniqueUser } from 'app/views/Models/UniqueUserDto';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  spinner: boolean = false;
  @ViewChild('username') yourElement: ElementRef;

  _timeout: any = null;
  IsNameunique: string = "";
  EmployeeForm: FormGroup;
  Departments: any[] = [];
  SubContractor: any[] = [];
  Roles: any[] = [];
  selectedTypes: string[] = [];
  IsObserver: boolean = false;
  SubContact: boolean = false;
  Depart: boolean = false;
  Company: any;
  useraccess: boolean = false;
  editform: boolean = false;

  unqUser: UniqueUser = { username: null };
  emp: Employee = {
    roleId: null,
    typeId: null,
    type: null,
    badgeId: null,
    employeeName: null,
    designation: null,
    phonenumber: null,
    access: "1",
    username: null,
    companyName: null,
    email: null,
    password: null
  };

  updateemp: UpdateEmployee = {
    id: null,
    roleId: null,
    typeId: null,
    type: null,
    badgeId: null,
    employeeName: null,
    designation: null,
    phonenumber: null,
    access: "1",
    username: null,
    companyName: null,
    email: null,
    password: null
  };

  gridCols = 2;

  constructor(private fb: FormBuilder, private empservice: EmployeeService, private breakpointObserver: BreakpointObserver,
    private suctservice: SubcontractorService, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private deptservice: DepartmentService, private _snackBar: MatSnackBar) {
    this.spinner = true;
    forkJoin(
      this.deptservice.GetAllDepartments(), 
      this.suctservice.GetAllSubContractors(),
      this.deptservice.GetAllRoles()
    ).subscribe(res => {
      this.spinner = false;
      this.Departments = res[0]["data"];
      this.SubContractor = res[1]["data"];
      this.Roles = res[2]["data"];
    });
  }

  ngOnInit(): void {

    this.breakpointObserver.observe(['(max-width: 599px)']) // 👈 custom mobile-only query
      .subscribe(result => {
        this.gridCols = result.matches ? 1 : 2;
      });

    this.useraccess = true;
    this.EmployeeForm = this.fb.group({
      badge: [''],
      EmpName: [''],
      Role: [''],
      EmpDept: [''],
      subcontrid: [''],
      Designation: [''],
      PhonenNumber: ['', Validators.required],
      username: [''],
      password: [''],
      companyName: [''],
      email: [''],
      options: [[]] // Initialize as array for multiple select
    });

    if (this.data != null && this.data["editform"] == true) {
      this.editform = true;
      console.log(this.data["payload"]);
      
      // Set form values
      this.EmployeeForm.patchValue({
        EmpName: this.data["payload"]["employeeName"],
        Designation: this.data["payload"]["designation"],
        badge: this.data["payload"]["badgeId"],
        PhonenNumber: this.data["payload"]["phonenumber"],
        username: this.data["payload"]["username"],
        companyName: this.data["payload"]["companyName"],
        email: this.data["payload"]["email"],
        password: atob(this.data["payload"]["password"]),
        Role: this.data["payload"]["roleId"],
        subcontrid: this.data["payload"]["subContId"],
        EmpDept: this.data["payload"]["departId"]
      });

      // Handle multiple types
      if (this.data["payload"]["userType"]) {
        const types = this.data["payload"]["userType"].split(',');
        this.EmployeeForm.controls["options"].setValue(types);
        this.selectedTypes = types;
      }

      this.updateemp = {
        id: this.data["payload"]["id"],
        roleId: this.data["payload"]["roleId"],
        typeId: this.data["payload"]["departId"] || this.data["payload"]["subContId"] || null,
        type: this.data["payload"]["type"],
        badgeId: this.data["payload"]["badgeId"],
        employeeName: this.data["payload"]["employeeName"],
        designation: this.data["payload"]["designation"],
        phonenumber: this.data["payload"]["phonenumber"],
        access: this.data["payload"]["access"],
        username: this.data["payload"]["username"],
        companyName: this.data["payload"]["companyName"],
        email: this.data["payload"]["email"],
        password: atob(this.data["payload"]["password"])
      };

      if (this.data["payload"]["access"] == "1") {
        this.useraccess = true;
      } else {
        this.useraccess = false;
      }

      // Set company name based on type
      if (this.selectedTypes.includes('Department') || this.selectedTypes.includes('Department1')) {
        this.Company = 'NNE';
      } else if (this.selectedTypes.includes('Observer')) {
        this.Company = '';
      }
    }
  }

  private decodePasswordSafely(encoded: string): string {
  try {
    return encoded ? atob(encoded) : '';
  } catch (e) {
    console.error('Password decoding failed', e);
    return ''; // or return encoded to keep the original
  }
}

  radioChange(event) {
    this.selectedTypes = event.value;
    this.Depart = this.selectedTypes.includes('Department') || this.selectedTypes.includes('Department1');
    this.SubContact = this.selectedTypes.includes('Subcontractor');
    this.IsObserver = this.selectedTypes.includes('Observer');

    // Set company name based on selections
    if (this.selectedTypes.includes('Department') || this.selectedTypes.includes('Department1')) {
      this.Company = 'NNE';
      this.emp["companyName"]='NNE';
    } else if (this.selectedTypes.includes('Observer')) {
      this.Company = '';
      this.emp["companyName"]='';
    }
  }

  toggle(event) {
    this.useraccess = event.checked;
    this.emp.access = this.useraccess ? "1" : "0";
    this.updateemp.access = this.useraccess ? "1" : "0";
  }

  CreateEmp() {
    (Object as any).keys(this.EmployeeForm.controls).forEach((control) => {
      this.EmployeeForm.get(`${control}`).markAsTouched();
    });

    if (this.EmployeeForm.valid) {
      this.spinner = true;
      
      // Prepare employee data
      this.emp = {
        roleId: this.EmployeeForm.controls["Role"].value,
        badgeId: this.EmployeeForm.controls["badge"].value,
        employeeName: this.EmployeeForm.controls["EmpName"].value,
        companyName: this.EmployeeForm.controls["companyName"].value,
        email: this.EmployeeForm.controls["email"].value,
        designation: this.EmployeeForm.controls["Designation"].value,
        phonenumber: this.EmployeeForm.controls["PhonenNumber"].value,
        username: this.EmployeeForm.controls["username"].value,
        password: this.EmployeeForm.controls["password"].value,
        access: this.useraccess ? "1" : "0",
        type: this.EmployeeForm.controls["options"].value.join(','), // Join selected types with commas
        typeId: null
      };

      // Set typeId based on selected types
      if (this.selectedTypes.includes('Department') || this.selectedTypes.includes('Department1')) {
        this.emp.typeId = this.EmployeeForm.controls["EmpDept"].value;
      }
      if (this.selectedTypes.includes('Subcontractor')) {
        this.emp.typeId = this.EmployeeForm.controls["subcontrid"].value;
        this.emp.companyName = '';
      }
      if (this.selectedTypes.includes('Observer')) {
        this.emp.typeId = "1";
      }

      this.empservice.CreateEmployees(this.emp).subscribe(res => {
        this.spinner = false;
        if (res["status"] == 200) {
          this.openSnackBar("Employee Created Successfully");
          this.EmployeeForm.reset();
        } else {
          this.openSnackBar(res["message"]);
        }
      }, error => {
        this.spinner = false;
        this.openSnackBar("Something went wrong. Please try again later...");
      });
    }
  }

  UpdateEmp() {
    if (this.EmployeeForm.valid) {
      this.spinner = true;
      
      this.updateemp = {
        id: this.updateemp.id,
        roleId: this.EmployeeForm.controls["Role"].value,
        badgeId: this.EmployeeForm.controls["badge"].value,
        employeeName: this.EmployeeForm.controls["EmpName"].value,
        companyName: this.EmployeeForm.controls["companyName"].value,
        email: this.EmployeeForm.controls["email"].value,
        designation: this.EmployeeForm.controls["Designation"].value,
        phonenumber: this.EmployeeForm.controls["PhonenNumber"].value,
        username: this.EmployeeForm.controls["username"].value,
        password: btoa(this.EmployeeForm.controls["password"].value),
        access: this.useraccess ? "1" : "0",
        type: this.EmployeeForm.controls["options"].value.join(','),
        typeId: null
      };

      // Set typeId based on selected types
      if (this.selectedTypes.includes('Department') || this.selectedTypes.includes('Department1')) {
        this.updateemp.typeId = this.EmployeeForm.controls["EmpDept"].value;
      }
      if (this.selectedTypes.includes('Subcontractor')) {
        this.updateemp.typeId = this.EmployeeForm.controls["subcontrid"].value;
        this.updateemp.companyName = '';
      }
      if (this.selectedTypes.includes('Observer')) {
        this.updateemp.typeId = "1";
      }

      this.empservice.UpdateEmployees(this.updateemp).subscribe(res => {
        this.spinner = false;
        if (res["status"] == 200) {
          this.openSnackBar("Employee Updated Successfully");
        } else {
          this.openSnackBar(res["message"]);
        }
      }, error => {
        this.spinner = false;
        this.openSnackBar("Something went wrong. Please try again later...");
      });
    }
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.yourElement.nativeElement, 'input')
      .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(data => this.searchusername());
  }

  searchusername() {
    this.unqUser.username = this.EmployeeForm.controls["username"].value;
    this.empservice.CheckUsername(this.unqUser).subscribe(data => {
      this.IsNameunique = data["message"];
    });
  }
}
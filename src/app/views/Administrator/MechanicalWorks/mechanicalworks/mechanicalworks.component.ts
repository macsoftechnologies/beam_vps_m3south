import { Component, OnInit, Optional, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteMechanicalWorkDto, MechanicalWorkDto, UpdateMechanicalWorkDto } from 'app/views/Models/mechanicalworkdto';
import { MechanicalworkService } from 'app/shared/services/mechanicalworks.service';

@Component({
  selector: 'app-mechanicalworks',
  templateUrl: './mechanicalworks.component.html',
  styleUrls: ['./mechanicalworks.component.css']
})
export class MechanicalworkComponent implements OnInit {
   @ViewChild('username') yourElement: ElementRef;

  MechnicalWorkForm: FormGroup;
  editform:boolean=false;
  spinner:boolean=false;
  
  MechnicalWork: MechanicalWorkDto=
  {
    mechanical_works:null
  }

  updatemechanicalwork:UpdateMechanicalWorkDto=
  {
    id:null,
    mechanical_works:null
  }
  deletemechanicalwork:DeleteMechanicalWorkDto=
  {
    id:null
  }
  constructor(private fb: FormBuilder, private mechanicalworkservice: MechanicalworkService,private _snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any[]) { 

      this.MechnicalWorkForm = this.fb.group({
        id: [''],
        mechanical_works: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    
    if (this.data != null && this.data["editform"] == true) {
      this.editform = true;
      this.MechnicalWorkForm.controls["id"].setValue(this.data["payload"]["id"]);
      this.MechnicalWorkForm.controls["mechanical_works"].setValue(this.data["payload"]["mechanical_works"])
    }
  }

  Createmechanicalwork() {
    this.spinner=true;

    this.MechnicalWork.mechanical_works=this.MechnicalWorkForm.controls['mechanical_works'].value;
    console.log("......,,,,,",this.MechnicalWork.mechanical_works);
    this.mechanicalworkservice.CreateNewMechanicalwork(this.MechnicalWork).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Mechanical work Created Successfully");
        this.MechnicalWorkForm.reset();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
      }
      );    
  }
  Updateelectricalwork()
  {
    this.spinner=true;

    this.updatemechanicalwork.id=this.MechnicalWorkForm.controls["id"].value;
    this.updatemechanicalwork.mechanical_works=this.MechnicalWorkForm.controls["mechanical_works"].value;
    this.mechanicalworkservice.UpdateMechanicalwork(this.updatemechanicalwork).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Mechanical work updated Successfully");
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


}

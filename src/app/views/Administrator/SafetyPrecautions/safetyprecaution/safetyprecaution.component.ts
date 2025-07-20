import { Component, OnInit, Optional, Inject } from '@angular/core';
import { PrecautionDto, UpdatePrecautionDto, DeletePrecautionDto } from 'app/views/Models/precaution';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafetyprecautionService } from 'app/shared/services/safetyprecautionservice';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-safetyprecaution',
  templateUrl: './safetyprecaution.component.html',
  styleUrls: ['./safetyprecaution.component.css']
})
export class SafetyprecautionComponent implements OnInit {

  SafetyprecautionForm: FormGroup;
  editform:boolean=false;
  spinner:boolean=false;
  
  Precaution:PrecautionDto=
  {
    precaution:null
  }

  updateprecaution:UpdatePrecautionDto=
  {
    id:null,
    precaution:null
  }
  deleteprecaution:DeletePrecautionDto=
  {
    id:null
  }
  constructor(private fb: FormBuilder, private safetyservice: SafetyprecautionService,private _snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any[]) { 

      this.SafetyprecautionForm = this.fb.group({
        id: [''],
        precaution: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    
    if (this.data != null && this.data["editform"] == true) {
      this.editform = true;
      this.SafetyprecautionForm.controls["id"].setValue(this.data["payload"]["id"]);
      this.SafetyprecautionForm.controls["precaution"].setValue(this.data["payload"]["precaution"])
    }
  }

  Createprecaution() {
    this.spinner=true;

    this.Precaution.precaution=this.SafetyprecautionForm.controls['precaution'].value;
    this.safetyservice.CreateNewSafetyprecaution(this.Precaution).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Safetyprecaution Created Successfully");
        this.SafetyprecautionForm.reset();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
      }
      );    
  }
  Updateprecaution()
  {
    this.spinner=true;

    this.updateprecaution.id=this.SafetyprecautionForm.controls["id"].value;
    this.updateprecaution.precaution=this.SafetyprecautionForm.controls["precaution"].value;
    this.safetyservice.UpdateSafetyprecaution(this.updateprecaution).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Safetyprecaution updated Successfully");
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

import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivityDto, UpdateActivityDto } from 'app/views/Models/ActivityDto';
import { ActivityService } from 'app/shared/services/activity.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  ActivityForm: FormGroup;
  editform:boolean=false;
  spinner:boolean=false;

  depart:ActivityDto=
  {
    activityName:null
  }
  updatedepart:UpdateActivityDto=
  {
    id:null,
    activityName:null
  }

  constructor(private fb: FormBuilder, private actvtservice: ActivityService,private _snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any[],) {

      this.ActivityForm = this.fb.group({
        id: [''],
        activityName: ['', Validators.required]
      });
     
    }


    ngOnInit(): void {
 
      if (this.data != null && this.data["editform"] == true) {
        this.editform = true;
        this.ActivityForm.controls["id"].setValue(this.data["payload"]["id"]);
        this.ActivityForm.controls["activityName"].setValue(this.data["payload"]["activityName"])
      }
      
    }
    CreateActivity() {
      this.spinner=true;
  
      this.depart.activityName=this.ActivityForm.controls['activityName'].value;
      this.actvtservice.CreateNewActivity(this.depart).subscribe(res=>
        {
          this.spinner=false;
          this.openSnackBar("Activity Created Successfully");
          this.ActivityForm.reset();
        },
        error=>
        {
          this.openSnackBar("Something went wrong. Plz try again later...");
        }
        );    
    }
    UpdateActivity()
    {
      this.spinner=true;
  
      this.updatedepart.id=this.ActivityForm.controls["id"].value;
      this.updatedepart.activityName=this.ActivityForm.controls["activityName"].value;
      this.actvtservice.UpdateActivity(this.updatedepart).subscribe(res=>
        {
          this.spinner=false;
          this.openSnackBar("Activity updated Successfully");
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

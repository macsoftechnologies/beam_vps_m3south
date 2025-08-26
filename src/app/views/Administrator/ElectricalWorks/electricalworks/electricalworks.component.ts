import { Component, OnInit, Optional, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteElectricalWorkDto, ElectricalWorkDto, UpdateElectricalWorkDto } from 'app/views/Models/electricalworkdto';
import { ElectricalworkService } from 'app/shared/services/electricalworks.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-electricalworks',
  templateUrl: './electricalworks.component.html',
  styleUrls: ['./electricalworks.component.css']
})
export class ElectricalworkComponent implements OnInit {
   @ViewChild('username') yourElement: ElementRef;

  ElectricalWorkForm: FormGroup;
  editform:boolean=false;
  spinner:boolean=false;
  
  ElectricalWork: ElectricalWorkDto=
  {
    electrical_works:null,
    module: null
  }

  updateelectricalwork:UpdateElectricalWorkDto=
  {
    id:null,
    electrical_works:null,
    module: null
  }
  deleteelectricalwork:DeleteElectricalWorkDto=
  {
    id:null
  }
  gridCols = 2;
  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver, private electricalworkservice: ElectricalworkService,private _snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any[]) { 

      this.ElectricalWorkForm = this.fb.group({
        id: [''],
        module: ['', Validators.required],
        electrical_works: ['', Validators.required]
      });
    }

  ngOnInit(): void {

     this.breakpointObserver.observe(['(max-width: 599px)']) // 👈 custom mobile-only query
      .subscribe(result => {
        this.gridCols = result.matches ? 1 : 2;
      });
    
    if (this.data != null && this.data["editform"] == true) {
      this.editform = true;
      this.ElectricalWorkForm.controls["id"].setValue(this.data["payload"]["id"]);
      this.ElectricalWorkForm.controls["module"].setValue(this.data["payload"]["module"]);
      this.ElectricalWorkForm.controls["electrical_works"].setValue(this.data["payload"]["electrical_works"])
    }
  }

  Createelectricalwork() {
    this.spinner=true;
    this.ElectricalWork.module=this.ElectricalWorkForm.controls['module'].value;
    this.ElectricalWork.electrical_works=this.ElectricalWorkForm.controls['electrical_works'].value;
    console.log("......,,,,,",this.ElectricalWork.electrical_works);
    this.electricalworkservice.CreateNewElectricalwork(this.ElectricalWork).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Electrical work Created Successfully");
        this.ElectricalWorkForm.reset();
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

    this.updateelectricalwork.id=this.ElectricalWorkForm.controls["id"].value;
    this.updateelectricalwork.module=this.ElectricalWorkForm.controls["module"].value;
    this.updateelectricalwork.electrical_works=this.ElectricalWorkForm.controls["electrical_works"].value;
    this.electricalworkservice.UpdateElectricalwork(this.updateelectricalwork).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Electrical work updated Successfully");
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

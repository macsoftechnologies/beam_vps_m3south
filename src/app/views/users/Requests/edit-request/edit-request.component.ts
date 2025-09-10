import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AddNotes, UpdateNotes, UpdateSafety, UpdateTime } from 'app/views/Models/MultiRequestUpdateDto';
import { RequestService } from 'app/shared/services/request.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SafetyprecautionService } from 'app/shared/services/safetyprecautionservice';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { config } from "config";

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
  precaution:string="";
  Notes:string="";
  StartTime:any;
  EndTime:string="";
  night_shift: any;
  new_end_time: any;
  minDate: Date;
  maxDate: Date;
  IsNotes:boolean=false;
  IsSafety:boolean=false;
  IsTime:boolean=false;
  spinner:boolean=false;
  isnightshiftyes: boolean = false;
  EndTimeValidator: boolean = false;
  userdetails: any = null;

  Safetypreselectable = true;
  safetyprecdata: any[] = [];
  safetyList: any[] = [];
  filteredsafety: Observable<any[]>;
  RequestForm: FormGroup;
  @ViewChild('badgeInput') badgeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  updatenotes:AddNotes=
  {
  request_id:null,
  permit_no: null,
  user_id: null,
  username: null,
  note:null,
  createdTime: null,
  }
updatesafety:UpdateSafety=
{
  id:null,
  safety:null,
  fields: null,
  created_time: null,
  Request_status1: null,
  userId: null,
}
updatetimes:UpdateTime=
{
  id:null,
  Start_Time:null,
  End_Time:null,
  night_shift: null,
  new_end_time: null,
  logs: null,
}

  constructor(private reqservice:RequestService,@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<EditRequestComponent>, private safetyservice: SafetyprecautionService,
  private datePipe: DatePipe,private _snackBar: MatSnackBar,private fb: FormBuilder)
  {
    
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   
    this.safetyservice.GetSafetyprecautions().subscribe(res=>{
      this.safetyList=res["data"];
    });
  }
  ngOnInit(): void
  {
    this.userdetails = JSON.parse(localStorage.getItem('m3south_EGRET_USER'));

    this.RequestForm = this.fb.group({
      Safetyprecaustion: ['', Validators.required],
    });
    
    if(this.data["title"]=="notes")
    {
       this.IsNotes=true;
    }
    else if(this.data["title"]=="safetyPrecaution")
    {
      // this.filteredsafety = this.RequestForm.controls["Safetyprecaustion"].valueChanges
      // .pipe(
      //   startWith(''),
      //   map(val => val.length >= 1 ? this.filter(val) : [])
      // );

      // this.filteredsafety = this.RequestForm.controls["Safetyprecaustion"].valueChanges.pipe(
      //   startWith(null),
      //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.safetyList.slice()));
      
       this.IsSafety=true; 
    }
    else if(this.data["title"]=="Time")
    {
       this.IsTime=true;
    }
  }

  // filter(val: string) {
  //   return this.safetyList.filter(option =>
  //     option.precaution.toLowerCase().indexOf(val.toLowerCase()) === 0);
  // }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.safetyList.filter(fruit => fruit.precaution.toLowerCase().indexOf(filterValue) === 0);
  }

  CreateNotes()
  {
    console.log("multi edit data",this.data);
    this.spinner=true;
    this.updatenotes.note=this.Notes;
    this.updatenotes.request_id=this.data["payload"];
    this.updatenotes.permit_no=this.data["permit_no"];
    this.updatenotes.user_id=this.userdetails.id;
    this.updatenotes.username=this.userdetails.displayName;
    this.updatenotes.createdTime=config.getDenmarkTime.full();
    this.reqservice.AddListReqstNote(this.updatenotes).subscribe(res=>
      {
        this.openSnackBar("Notes updated Successfully");
      this.spinner=false;
      });
  }
  getSafetyText(id: string): string {
  let item = this.safetyList.find((s: any) => s.id == id);
  return item ? item.text : id;  // fallback to id if not found
}

CreateSafety() {
  console.log("precautions", this.data.safetyprecautions);

  let requestIds: string[] = this.data["payload"].split(",");   // "83016,83015,83014"
  let createdTime = config.getDenmarkTime.full();

  let payload: any = {
    id: this.data["payload"],   // will update later
    safety: (this.RequestForm.controls["Safetyprecaustion"].value || []).toString(),
    logs: []
  };

  // helper: map ID → text
  const getSafetyText = (id: string): string => {
    let item = this.safetyList.find((s: any) => s.id == id);
    return item ? item.precaution : id;
  };

  // selected safety values (common for all permits in edit)
  let presentIds = (this.RequestForm.controls["Safetyprecaustion"].value || "").toString();

  // split previous values per permit
  let prevArr = this.data.safetyprecautions
    ? this.data.safetyprecautions.split("|")
    : [];

  payload.logs = requestIds.map((reqId: string, index: number) => {
    let fields: any[] = [];

    // previous values for this permit
    let previousIds = prevArr[index] ?? "";

    let present = presentIds
      .split(",")
      .map((id: string) => getSafetyText(id.trim()))
      .filter((txt: string) => txt)
      .join(", ");

    let previous = previousIds
      .split(",")
      .map((id: string) => getSafetyText(id.trim()))
      .filter((txt: string) => txt)
      .join(", ");

    // ✅ Logic:
    // If previous empty → always update
    // If previous not empty → update only when different
    if (!previous || previous !== present) {
      fields.push({
        field_name: "Safety Precautions",
        previous: previous,
        present: present
      });
    }

    return {
      requestId: reqId,
      userId: this.userdetails.id,
      requestType: "Edited",
      createdTime: createdTime,
      fields: fields
    };
  });

  // remove permits with no changes
  payload.logs = payload.logs.filter((log: any) => log.fields.length > 0);

  // update id → only permits with changes
  payload.id = payload.logs.map((log: any) => log.requestId).join(",");

  if (payload.logs.length > 0) {
    this.reqservice.UpdateListReqstSafety(payload).subscribe((res) => {
      this.openSnackBar("Safety updated Successfully");
      this.spinner = false;
    });
  } else {
    this.openSnackBar("No changes made.");
  }
} 
    toggleNightShift(isChecked: boolean) {
    this.isnightshiftyes = isChecked;
    this.updatetimes.night_shift = isChecked ? 1 : 0;
  }

  // CreateTime()
  // {
  //   this.spinner=true;
  //   console.log("..startTime", this.StartTime);
  //   console.log("...endTime", this.EndTime);
  //   console.log("...nightshift", this.night_shift);
  //   console.log("...new_end_time", this.new_end_time);
  //   if(this.StartTime && this.StartTime !== '' && this.StartTime !== undefined) {
  //      this.updatetimes.Start_Time=this.datePipe.transform(this.StartTime,'HH:mm');
  //   } else {
  //     delete this.updatetimes.Start_Time;
  //   }
  //   if(this.EndTime && this.EndTime !== '' && this.EndTime !== undefined) {
  //      this.updatetimes.End_Time=this.datePipe.transform(this.EndTime,'HH:mm');
  //   } else {
  //     delete this.updatetimes.End_Time;
  //   }
  //   // if(this.night_shift == 1 && this.night_shift !== undefined) {
  //   //    this.updatetimes.night_shift= this.night_shift;
  //   // } else {
  //   //   delete this.updatetimes.night_shift;
  //   // }
  //   if(this.new_end_time  && this.new_end_time !== '' && this.new_end_time !== undefined) {
  //      this.updatetimes.new_end_time = this.datePipe.transform(this.new_end_time,'HH:mm');
  //   } else {
  //     delete this.updatetimes.new_end_time;
  //   }
  //   console.log("...datapayload", this.data);
  //   this.updatetimes.id=this.data["payload"];
  //   console.log(".....updatetimes", this.updatetimes);
  //   if(this.updatetimes.Start_Time > this.updatetimes.End_Time) {
  //     this.EndTimeValidator = true;
  //   }

  //   if(!this.EndTimeValidator) {
  //        this.reqservice.UpdateListReqstTime(this.updatetimes).subscribe(res=>
  //     // {
  //     //   this.openSnackBar("Time updated Successfully");
  //     //   this.spinner=false;
  //     console.log("response....", res)
  //     )
  //   } else {
  //     this.openSnackBar("EndTime Should be greaterthan StartTime.");
  //     return ;
  //   }

 
  // }

  

// Utility: trim seconds if present
normalizeTime(value: string | null | undefined): string | null {
  if (!value) return null;
  return value.length > 5 ? value.substring(0, 5) : value;  // keep only HH:mm
}

// Utility: convert night shift numeric to Yes/No
normalizeNightShift(value: string | number | null | undefined): string {
  if (value === "1" || value === 1) return "Yes";
  return "No";
}

CreateTime() {
  this.spinner = true;

  let requestIds: string[] = this.data["payload"].split(",");
  let createdTime = config.getDenmarkTime.full();

  let payload: any = {
    id: this.data["payload"],
    Start_Time: this.StartTime ? this.datePipe.transform(this.StartTime, "HH:mm") : null,
    End_Time: this.EndTime ? this.datePipe.transform(this.EndTime, "HH:mm") : null,
    night_shift: this.night_shift ?? null,
    new_end_time: this.new_end_time ? this.datePipe.transform(this.new_end_time, "HH:mm") : null,
    logs: []
  };

  payload.logs = requestIds.map((reqId: string, index: number) => {
    let fields: any[] = [];

    // ----- Start Time -----
    if (this.StartTime) {
      let present = this.normalizeTime(this.datePipe.transform(this.StartTime, "HH:mm") || null);

      let prevArr = this.data.startTIme ? this.data.startTIme.split(",") : [];
      let previous = this.normalizeTime(prevArr[index]);

      if (!previous || previous !== present) {
        fields.push({
          field_name: "Start Time",
          previous: previous,
          present: present
        });
      }
    }

    // ----- End Time -----
    if (this.EndTime) {
      let present = this.normalizeTime(this.datePipe.transform(this.EndTime, "HH:mm") || null);

      let prevArr = this.data.endTime ? this.data.endTime.split(",") : [];
      let previous = this.normalizeTime(prevArr[index]);

      if (!previous || previous !== present) {
        fields.push({
          field_name: "End Time",
          previous: previous,
          present: present
        });
      }
    }

    // ----- New End Time -----
    if (this.new_end_time) {
      let present = this.normalizeTime(this.datePipe.transform(this.new_end_time, "HH:mm") || null);

      let prevArr = this.data.newEndTime ? this.data.newEndTime.split(",") : [];
      let previous = this.normalizeTime(prevArr[index]);

      if (!previous || previous !== present) {
        fields.push({
          field_name: "New End Time",
          previous: previous,
          present: present
        });
      }
    }

    // ----- Night Shift -----
    if (this.night_shift !== undefined) {
      let present = this.normalizeNightShift(this.night_shift);

      let prevArr = this.data.nightShift ? this.data.nightShift.split(",") : [];
      let previous = this.normalizeNightShift(prevArr[index]);

      if (previous !== present) {
        fields.push({
          field_name: "Night Shift",
          previous: previous,
          present: present
        });
      }
    }

    return {
      requestId: reqId,
      userId: this.userdetails.id,
      requestType: "Edited",
      createdTime: createdTime,
      fields: fields
    };
  });

  // remove permits with no changes
  payload.logs = payload.logs.filter((log: any) => log.fields.length > 0);

  console.log("Final Payload:", payload);

  if (!payload.Start_Time) delete payload.Start_Time;
  if (!payload.End_Time) delete payload.End_Time;
  if (!payload.night_shift) delete payload.night_shift;
  if (!payload.new_end_time) delete payload.new_end_time;

  if (payload.logs.length > 0) {
    this.reqservice.UpdateListReqstTime(payload).subscribe(res => {
      console.log("response....", res);
      this.spinner = false;
    });
  } else {
    this.openSnackBar("No changes made");
    this.spinner = false;
  }
}


//   CreateTime() {
//   this.spinner = true;
//   let fields: any[] = [];

//   // ----- Start Time -----
//   if (this.StartTime && this.StartTime !== '') {
//     let present = this.datePipe.transform(this.StartTime,'HH:mm');
//     let previous = this.data.startTIme;   // from list-request

//     if (previous !== present) {
//       fields.push({
//         field_name: 'Start_Time',
//         previous: previous,
//         present: present
//       });
//     }
//     this.updatetimes.Start_Time = present;
//   } else {
//     delete this.updatetimes.Start_Time;
//   }

//   // ----- End Time -----
//   if (this.EndTime && this.EndTime !== '') {
//     let present = this.datePipe.transform(this.EndTime,'HH:mm');
//     let previous = this.data.endTime;

//     if (previous !== present) {
//       fields.push({
//         field_name: 'End_Time',
//         previous: previous,
//         present: present
//       });
//     }
//     this.updatetimes.End_Time = present;
//   } else {
//     delete this.updatetimes.End_Time;
//   }

//   // ----- Night Shift -----
//   if (this.night_shift !== undefined) {
//     let present = this.night_shift;
//     let previous = this.data.nightShift;

//     if (previous !== present) {
//       fields.push({
//         field_name: 'night_shift',
//         previous: previous,
//         present: present
//       });
//     }
//     this.updatetimes.night_shift = present;
//   } else {
//     delete this.updatetimes.night_shift;
//   }

//   // ----- New End Time -----
//   if (this.new_end_time && this.new_end_time !== '') {
//     let present = this.datePipe.transform(this.new_end_time,'HH:mm');
//     let previous = this.data.newEndTime;

//     if (previous !== present) {
//       fields.push({
//         field_name: 'new_end_time',
//         previous: previous,
//         present: present
//       });
//     }
//     this.updatetimes.new_end_time = present;
//   } else {
//     delete this.updatetimes.new_end_time;
//   }

//   // Attach fields array
//   this.updatetimes.fields = JSON.stringify(fields);
//   this.updatetimes.created_time = config.getDenmarkTime.full();
//   this.updatetimes.Request_status1 = "1";
//   this.updatetimes.userId = this.userdetails.id;
//   this.updatetimes.id = this.data["payload"];

//   console.log("Final Payload:", this.updatetimes);

//   // Validation for Start < End
//   if (this.updatetimes.Start_Time > this.updatetimes.End_Time) {
//     this.EndTimeValidator = true;
//   }

//   if (!this.EndTimeValidator) {
//     this.reqservice.UpdateListReqstTime(this.updatetimes).subscribe(res => {
//       console.log("response....", res);
//       this.spinner = false;
//     });
//   } else {
//     this.openSnackBar("EndTime Should be greater than StartTime.");
//     return;
//   }
// }



  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,

    });
    this.dialogRef.close();
  }
  selectedsafety(event: MatAutocompleteSelectedEvent): void {
    this.safetyList.forEach(x => {
      if (x["id"] == event.option.value) {
        this.safetyprecdata.push(x);
      }
    })
    //this.Rooms.push(event.option.viewValue);
   // this.badgeInput.nativeElement.value = '';
    this.RequestForm.controls["Safetyprecaustion"].setValue(null);
  }
  addsafety(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.safetyprecdata.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    // this.RequestForm.controls["Safetyprecaustion"].setValue(null);
    this.RequestForm.controls["Safetyprecaustion"].setValue(this.safetyprecdata);
  }

  removesafety(fruit: string): void {
    const index = this.safetyprecdata.indexOf(fruit);

    if (index >= 0) {
      this.safetyprecdata.splice(index, 1);
    }
  }


}


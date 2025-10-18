import { Component, OnInit, Optional, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DeleteZoneStatus, GetZoneStatusDto, UpdateZoneStatus, ZoneStatusDto } from 'app/views/Models/Zone-statusDto';
import { ZoneStatusService } from 'app/shared/services/zone-status.service';
import { RequestService } from 'app/shared/services/request.service';
interface Building {
  buildingId: number;
  building_name: string;
  planType: string;
  zoneList: {
    floorName: string;
  }[];
}

@Component({
  selector: 'app-ZoneStatuss',
  templateUrl: './zone-status.component.html',
  styleUrls: ['./zone-status.component.css']
})
export class ZoneStatusComponent implements OnInit {
   @ViewChild('username') yourElement: ElementRef;

  ZoneStatusForm: FormGroup;
  editform:boolean=false;
  spinner:boolean=false;
  Buildings: Building[] = [];
  filteredFloors: string[] = [];
  filteredZones: string[] = [];  
  zoneExists: boolean = false;

  
  GetZoneStatus: GetZoneStatusDto =
    {
    building_id: null,
    level: null,
    zone: null,
  }
  
  ZoneStatus: ZoneStatusDto=
  {
    building_id: null,
    level: null,
    zone: null,
    status: null,
  }

  updatezonestatus:UpdateZoneStatus=
  {
    id:null,
    building_id: null,
    level: null,
    zone: null,
    status: null,
  }
  deletezonestatus:DeleteZoneStatus=
  {
    id:null
  }
  gridCols = 2;
private allFloors: { buildingId: number; floorName: string; level: string }[] = [];
  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver, private ZoneStatusservice: ZoneStatusService,private _snackBar: MatSnackBar,
      private requestservice: RequestService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any[]) { 

      this.ZoneStatusForm = this.fb.group({
        id: [''],
        Building_Id: ['', Validators.required],
        level: ['', Validators.required],
        zone: ['', Validators.required],
        status: ['', Validators.required]
      });

       this.requestservice.GetAllSites().subscribe(res => {
      this.GetBuilding(res["data"][1]["site_id"]);
    });
    }

  ngOnInit(): void {

     this.breakpointObserver.observe(['(max-width: 599px)']) // 👈 custom mobile-only query
      .subscribe(result => {
        this.gridCols = result.matches ? 1 : 2;
      });
    
    if (this.data != null && this.data["editform"] == true) {
      this.editform = true;
      this.ZoneStatusForm.controls["id"].setValue(this.data["payload"]["id"]);
      this.ZoneStatusForm.controls["Building_Id"].setValue(this.data["payload"]["building_id"]);
      this.ZoneStatusForm.controls["level"].setValue(this.data["payload"]["level"]);
      this.ZoneStatusForm.controls["zone"].setValue(this.data["payload"]["zone"]);
      this.ZoneStatusForm.controls["status"].setValue(this.data["payload"]["status"])
    }

    this.initializeData();
    this.setupFilterListeners();
  }

    GetBuilding(event) {
    this.requestservice.GetAllBuildingsbyid(event).subscribe(res => {
      this.Buildings = res["data"];
    });
  }

  private initializeData(): void {
    const buildingData = this.requestservice.bulidingDataWithIds() as Building[];
    this.Buildings = buildingData;

    // ✅ Extract floors and zones
    this.allFloors = [];
    buildingData.forEach(b => {
      b.zoneList?.forEach(z => {
        this.allFloors.push({
          buildingId: Number(b.buildingId),
          floorName: z.floorName,
          level: b.planType
        });
      });
    });

    this.resetFilters();
  }

  private setupFilterListeners(): void {
    this.ZoneStatusForm.get('Building_Id')?.valueChanges.subscribe(buildingId => {
      this.ZoneStatusForm.get('level')?.setValue('', { emitEvent: false });
      this.ZoneStatusForm.get('zone')?.setValue('', { emitEvent: false });
      this.updateFilters(buildingId, '');
    });

    this.ZoneStatusForm.get('level')?.valueChanges.subscribe(level => {
      this.ZoneStatusForm.get('zone')?.setValue('', { emitEvent: false });
      this.updateFilters(this.ZoneStatusForm.get('Building_Id')?.value, level);
    });

    this.ZoneStatusForm.get('zone')?.valueChanges.subscribe(() => {
  this.GetZonestatus(this.editform);  // Pass true if editing
});

  }

private updateFilters(buildingId: number | null, level: string | null): void {
    // Filter levels
    this.filteredFloors = [...new Set(
      this.allFloors
        .filter(f => !buildingId || f.buildingId === Number(buildingId))
        .map(f => f.level)
    )];

    // Filter zones
    this.filteredZones = this.allFloors
      .filter(f => {
        const matchBuilding = !buildingId || f.buildingId === Number(buildingId);
        const matchLevel = !level || f.level === level;
        return matchBuilding && matchLevel;
      })
      .map(f => f.floorName);
  }

private resetFilters(): void {
    this.filteredFloors = [...new Set(this.allFloors.map(f => f.level))];
    this.filteredZones = this.allFloors.map(f => f.floorName);
  }

  
GetZonestatus(isEdit: boolean = false) {
  this.GetZoneStatus.building_id = this.ZoneStatusForm.controls['Building_Id'].value;
  this.GetZoneStatus.level = this.ZoneStatusForm.controls['level'].value;
  this.GetZoneStatus.zone = this.ZoneStatusForm.controls['zone'].value;

  this.ZoneStatusservice.GetIndividualZone(this.GetZoneStatus).subscribe((res: any) => {
    if (res && res.length > 0) {
      if (isEdit) {
        // For edit, allow only if the same record is being edited
        const currentId = this.ZoneStatusForm.controls['id'].value;
        const conflict = res.find(r => r.id !== currentId);
        this.zoneExists = !!conflict; // true if conflict with another record
      } else {
        // For create, restrict if zone already exists
        this.zoneExists = true;
      }
    } else {
      this.zoneExists = false;
    }
      const zoneControl = this.ZoneStatusForm.get('zone');
    if (this.zoneExists) {
      zoneControl?.setErrors({ zoneExists: true });
    } else {
      // Keep other validators intact
      if (zoneControl?.hasError('required')) {
        zoneControl.setErrors({ required: true });
      } else {
        zoneControl?.setErrors(null);
      }
    }
  });


}


  CreateZoneStatus() {
    this.spinner=true;

      if (this.zoneExists) {
    this.openSnackBar("Zone status already added for this Zone!");
    this.spinner = false;
    return;
  }

    this.ZoneStatus.building_id=this.ZoneStatusForm.controls['Building_Id'].value;
    this.ZoneStatus.level=this.ZoneStatusForm.controls['level'].value;
    this.ZoneStatus.zone=this.ZoneStatusForm.controls['zone'].value;
    this.ZoneStatus.status=this.ZoneStatusForm.controls['status'].value;
    // (Object as any).keys(this.ZoneStatusForm.controls).forEach((control) => {
    //   this.ZoneStatusForm.get(`${control}`).updateValueAndValidity();
    //   this.ZoneStatusForm.get(`${control}`).markAsTouched();
    // });
    if(this.ZoneStatusForm.valid) {
    this.ZoneStatusservice.CreateNewZoneStatus(this.ZoneStatus).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Zone Status Added Successfully");
        this.ZoneStatusForm.reset();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
        this.spinner = false;
      }
      );
    } else {
      this.openSnackBar("Invalid form please check .");
      this.spinner = false;
    }  
  }
  UpdateZoneStatus()
  {
    this.spinner=true;

      if (this.zoneExists) {
    this.openSnackBar("Zone status already added for this Zone!");
    this.spinner = false;
    return;
  }

    this.updatezonestatus.id=this.ZoneStatusForm.controls["id"].value;
    this.updatezonestatus.building_id=this.ZoneStatusForm.controls["Building_Id"].value;
    this.updatezonestatus.level=this.ZoneStatusForm.controls["level"].value;
    this.updatezonestatus.zone=this.ZoneStatusForm.controls["zone"].value;
    this.updatezonestatus.status=this.ZoneStatusForm.controls["status"].value;
    if(this.ZoneStatusForm.valid) {
    this.ZoneStatusservice.UpdateZoneStatus(this.updatezonestatus).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Zone status updated Successfully");
        //this.closeDialog();
      //  this.DepartmentForm.reset();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
        this.spinner = false;
      }
    )
    } else {
      this.openSnackBar("Invalid form please check .");
      this.spinner = false;
    }
  }
  
  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,

    });
  }


}

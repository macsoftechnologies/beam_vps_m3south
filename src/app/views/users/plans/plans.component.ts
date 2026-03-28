import { Component, OnInit, HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/shared/services/user.service';
import { Router } from '@angular/router';
import { PrintDownloadOptions } from 'app/views/Models/PrintDownloadOptionsDto';
import * as moment from 'moment';
import { SubcontractorService } from 'app/shared/services/subcontractor.service';
import { RequestService } from 'app/shared/services/request.service';
import { PlansDto } from 'app/views/Models/PlansDto';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { ExportExcelService } from 'app/shared/services/export-excel.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ListPopupComponent } from '../Requests/list-popup/list-popup.component';
import { config } from 'config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
interface Building {
  buildingId: number;
  building_name: string;
  planType: string;
  zoneList: {
    floorName: string;
    zoneSubList: {
      value: string;
      className: string;
    }[];
  }[];
}

interface RoomGroup {
  buildingId: number;
  planType: string;
  floorName: string;
  zones: {
    value: string;
    className: string;
  }[];
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  ModalOptions: PrintDownloadOptions;
  spinner: boolean = false;
  PlanForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  datefield: boolean = false;
  monthfield: boolean = false;
  yearfield: boolean = false;
  weekfield: boolean = false;
  ReqData: any[] = [];
  Buildings: Building[] = [];
  getFloors: string[] = []; // For single selection
  getRooms: RoomGroup[] = []; // For single selection

  PlanTypes: any[] = [
    {
      PlanId: 1,
      PlanName: 'Daily Report'
    },
    {
      PlanId: 2,
      PlanName: 'Weekly Report'
    },
  ];
  Status: any[] = [
    {
      Statusid: 'Hold',
      Statusname: 'Hold',
    },
    {
      Statusid: 'Draft',
      Statusname: 'Draft',
    },
    {
      Statusid: 'Approved',
      Statusname: 'Approved',
    },
    {
      Statusid: 'Rejected',
      Statusname: 'Rejected',
    },
    {
      Statusid: 'Opened',
      Statusname: 'Opened',
    },
    {
      Statusid: 'Closed',
      Statusname: 'Closed',
    },
    {
      Statusid: 'Cancelled',
      Statusname: 'Cancelled',
    },
    {
      Statusid: 'Pre-Approved',
      Statusname: 'Pre-Approved',
    },
    {
      Statusid: 'Auto-Cancel',
      Statusname: 'Auto-Cancel',
    },
  ];

    getHras = [
    {
      "label": "Hotwork",
      "value": 1,
      "key": "Hot_work",
      "image": "assets/images/logos/HotWorks.png"
    },
    {
      "label": "Electrical Systems",
      "value": 1,
      "key": "working_on_electrical_system",
       "image": "assets/images/logos/ElectricalSystems.png"
    },
    {
      "label": "Hazardous Substances/Chemicals",
      "value": 1,
      "key": "working_hazardious_substen",
      "image": "assets/images/logos/substanceChemical.png"
    },
    {
      "label": "Pressure testing of equipment",
      "value": 1,
      "key": "pressure_tesing_of_equipment",
      "image": "assets/images/logos/testingequipment.png"
    },
    {
      "label": "Working At Height",
      "value": 1,
      "key": "working_at_height",
      "image": "assets/images/logos/WorkingAtHight.png"
    },
    {
      "label": "Confined Spaces",
      "value": 1,
      "key": "working_confined_spaces",
      "image": "assets/images/logos/ConfinedSpace.png"
    },
    // {
    //   "label": "Working in ATEX Area",
    //   "value": 1,
    //   "key": "work_in_atex_area",
    //   "image": "assets/images/logos/ATEXarea.png"
    // },
    // {
    //   "label": "Securing Facilities (LOTO)",
    //   "value": 1,
    //   "key":"securing_facilities",
    //   "image": "assets/images/logos/SecuringFacilities.png"
    // },
    {
      "label": "Excavation Works",
      "value": 1,
      "key": "excavation_works",
      "image": "assets/images/logos/ExcavationWorks.png"
    },
    {
      "label": "Using Crane or Lifting",
      "value": 1,
      "key": "using_cranes_or_lifting",
      "image": "assets/images/logos/Craneslifting.png"
    },
    {
      "label": "Energization of Electrical Equipment",
      "value": 1,
      "key": "power_on",
      "image": "assets/images/logos/electrical_works.png"
    },
    {
      "label": "Energization of Mechanical Equipment",
      "value": 1,
      "key": "pressurization",
      "image": "assets/images/logos/mechanical1.png"
    },
    
  ];
  SubContractors: any[] = [];
  Sites: any[] = [];
  Weeks: any[] = [];
  // Buildings: any[] = [];
  filteredFloors: string[] = [];
  filteredRooms: RoomGroup[] = [];
  Years: any[] = [];
  WeekNumbers: any[] = [];
  date: Date;
   days_Names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = [
    { id:1,Name: "January"}, 
    { id:2,Name: "February"}, 
    { id:3,Name: "March"}, 
    { id:4,Name: "April"}, 
    { id:5,Name: "May"}, 
    { id:6,Name: "June"}, 
    { id:7,Name: "July"}, 
    { id:8,Name: "August"}, 
    { id:9,Name: "September"}, 
    { id:10,Name: "October"}, 
    { id:11,Name: "November"}, 
    { id:12,Name: "December"}, 
  ];
    Cols = [
    { field: 'Company_Name', header: 'Company Name' },
    { field: 'subContractorName', header: 'Sub Contractor' },
    { field: 'Site_Id', header: 'Site' },
    { field: 'Building_Id', header: 'Building' },
    { field: 'Activity', header: 'Activity' },
    { field: 'PermitNo', header: 'Activity Permit No' },
    { field: 'Start_Time', header: 'Start Time' },
    { field: 'End_Time', header: 'End Time' },
    { field: 'Request_status', header: 'Status' },
    { field: 'Notes', header: 'Notes' },
    { field: 'Working_Date', header: 'Working Date' },
    { field: 'Day', header: 'Day' }

  ];

  plansDtodata: PlansDto = {
    // Plans_Id:null,
    Building_Id: null,
    Month: null,
    Week:null,
    Year:null,
    Site_Id:null,
    Date:null,
    // Site_Id:null,
    Sub_Contractor_Id: null,
    Room_Type: null,
    from_date: null,
    to_date: null,

    start_time: null,
    end_time: null,
    area: null,
    permit_type: null,
    night_shift: null,
    new_date: null,
    new_end_time: null,
    permit_under: null,
    hras: '' as string,
    Request_status: null,
  }
  Planslist: any[] = [];
  dataForExcel = [];
  empPerformance = [
    { ID: 10011, NAME: "A", DEPARTMENT: "Sales", MONTH: "Jan", YEAR: 2020, SALES: 132412, CHANGE: 12, LEADS: 35 },
    { ID: 10012, NAME: "A", DEPARTMENT: "Sales", MONTH: "Feb", YEAR: 2020, SALES: 232324, CHANGE: 2, LEADS: 443 },
    { ID: 10013, NAME: "A", DEPARTMENT: "Sales", MONTH: "Mar", YEAR: 2020, SALES: 542234, CHANGE: 45, LEADS: 345 },
    { ID: 10014, NAME: "A", DEPARTMENT: "Sales", MONTH: "Apr", YEAR: 2020, SALES: 223335, CHANGE: 32, LEADS: 234 },
    { ID: 10015, NAME: "A", DEPARTMENT: "Sales", MONTH: "May", YEAR: 2020, SALES: 455535, CHANGE: 21, LEADS: 12 },
  ];
  DownloadExcelData:any[]=[];
  ListWeeks: any[] = [];
  private allRooms: RoomGroup[] = [];
  private allFloors: { buildingId: number; floorName: string }[] = [];

  gridCols = 2;
  gridCols3: number = 3;
  isnightshiftyes: boolean = false;

  constructor(private fb: FormBuilder, private userservices: UserService,
    private route: Router,public ete: ExportExcelService,
    private subcontrservice: SubcontractorService,
    private requestservice: RequestService,
    private requstservice: RequestService, private http: HttpClient,
    private dialog: MatDialog, 
    private _snackBar: MatSnackBar, 
    private datePipe: DatePipe,private breakpointObserver: BreakpointObserver,) {
    const currentYear = new Date(config.Denmarktz).getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    for (let i = 2024; i < 2030; i++) {
      this.Years.push(i);
    }
    this.subcontrservice.GetAllSubContractors().subscribe(res => {
      this.SubContractors = res["data"];
    });

    this.requstservice.GetAllSites().subscribe(res => {
      this.Sites = res["data"];
      this.PlanForm.controls["Site"].setValue(res["data"][1]["site_name"]);
      this.plansDtodata.Site_Id=res["data"][1]["site_id"];
      this.GetBuilding(res["data"][1]["site_id"]);
    });
  }
    
  // getRooms: string[] = [];

  ngOnInit(): void {

  this.breakpointObserver.observe([
     Breakpoints.XSmall,
     Breakpoints.Small,
     Breakpoints.Medium,
     Breakpoints.Large,
   ]).subscribe(result => {
     if (result.breakpoints[Breakpoints.XSmall]) {
       this.gridCols = 1;
       this.gridCols3 = 1;
     } else if (result.breakpoints[Breakpoints.Small]) {
       this.gridCols = 2;
       this.gridCols3 = 2;
     } else if (result.breakpoints[Breakpoints.Medium]) {
       this.gridCols = 2;
       this.gridCols3 = 3;
     } else if (result.breakpoints[Breakpoints.Large]) {
       this.gridCols = 2;
       this.gridCols3 = 3;
     }
   });


    this.PlanForm = this.fb.group({
      Date: [''],
      Year: [''],
      Weekno: [''],
      Month: [''],
      Plantype: [''],
      subContractor: [''],
      Building: [''],
      Site: [''],
      level: [''],
      WorkingDateFrom: [''],
      WorkingDateTo: [''],
      StartTime: [''],
      EndTime: [''],
      area: [''],
      permit_type: ['',],
      permit_under: ['',],
      night_shift: ['',],
      newWorkDate: ['',],
      new_end_time: ['',],
       Hras: ['',],
       Status: ['',],
    });

    this.initializeData();
    this.setupFilterListeners();
  }

  private initializeData(): void {
    const buildingData = this.requestservice.bulidingDataWithIds() as Building[];
    this.Buildings = buildingData;
    
    // Extract all rooms with building references
    this.allRooms = this.extractAllRooms(buildingData);
    
    // Extract all floors with their building references
    this.allFloors = this.extractAllFloors(buildingData);
    
    this.resetFilters();
  }
   private extractAllFloors(buildings: Building[]): { buildingId: number; floorName: string }[] {
    const floors: { buildingId: number; floorName: string }[] = [];
    buildings.forEach(building => {
        floors.push({
          buildingId: building.buildingId,
          floorName: building.planType
        });
    });
    return floors;
  }
  private setupFilterListeners(): void {
    this.PlanForm.get('Building')?.valueChanges.subscribe(buildingIds => {
        this.PlanForm.get('level')?.setValue([], { emitEvent: false });
        this.updateFilters(buildingIds, []);
    });
    
    this.PlanForm.get('level')?.valueChanges.subscribe(levels => {
      this.updateFilters(this.PlanForm.get('Building')?.value, levels);
    });
  }

  private updateFilters(buildingIds: number[] = [], levels: string[] = []): void {
    // Filter floors based on selected buildings
    this.filteredFloors = this.filterFloors(buildingIds);
    
    // Filter rooms based on both buildings and levels
    this.filteredRooms = this.filterRooms(buildingIds, levels);
  }


  private filterFloors(buildingIds: number[]): string[] {
    if (!buildingIds || buildingIds.length === 0) {
        return [...new Set(this.allFloors.map(f => f.floorName))];
    }
    
    const numericBuildingIds = buildingIds.map(id => Number(id));
    
    return [
        ...new Set(
            this.allFloors
                .filter(f => numericBuildingIds.includes(Number(f.buildingId)))
                .map(f => f.floorName)
        )
    ];
}

private filterRooms(buildingIds: number[], levels: string[]): RoomGroup[] {
    const numericBuildingIds = buildingIds?.map(id => Number(id)) || [];
    
    return this.allRooms.filter(room => {
        const buildingMatch = numericBuildingIds.length === 0 || 
                            numericBuildingIds.includes(Number(room.buildingId));
        
        const levelMatch = levels.length === 0 || 
                         levels.includes(room.planType);
        
        return buildingMatch && levelMatch;
    });
}

  private resetFilters(): void {
    this.filteredFloors = [...new Set(this.allFloors.map(f => f.floorName))];
    this.filteredRooms = [...this.allRooms];
  }
    private extractAllRooms(buildings: Building[]): RoomGroup[] {
    const rooms: RoomGroup[] = [];
    buildings.forEach(building => {
      building.zoneList?.forEach(zone => {
        rooms.push({
          buildingId: building.buildingId,
          planType: building.planType,
          floorName: zone.floorName,
          zones: zone.zoneSubList?.map(sub => ({
            value: sub.value,
            className: sub.className
          })) || []
        });
      });
    });
    return rooms;
  }

  
    formatDateWithoutTimezone(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

        toggleNightShift(isChecked: boolean) {
      this.isnightshiftyes = isChecked;
      this.PlanForm.get('night_shift').setValue(isChecked ? 1 : 0);
    
      // const newEndTimeControl = this.PlanForm.get('new_end_time');
      // const newWorkDateControl = this.PlanForm.get('newWorkDate');
    
      // if (isChecked) {
      //   const startDateValue = this.PlanForm.get('Startdate').value;
      //   if (startDateValue) {
      //     const startDate = new Date(startDateValue);
      //     const newWorkDate = new Date(startDate);
      //     newWorkDate.setDate(startDate.getDate() + 1);
      //     const formattedDate = this.formatDateWithoutTimezone(newWorkDate);
      //     newWorkDateControl.setValue(formattedDate);
      //   }
      //   // Add required validators when night shift is YES
      //   newEndTimeControl.setValidators([Validators.required]);
      //   newWorkDateControl.setValidators([Validators.required]);
      // } else {
      //   // Clear values and validators when night shift is NO
      //   newEndTimeControl.reset();
      //   newWorkDateControl.reset();
      //   newEndTimeControl.clearValidators();
      //   newWorkDateControl.clearValidators();
      // }
    
      // Re-evaluate validity after validator change
      // newEndTimeControl.updateValueAndValidity();
      // newWorkDateControl.updateValueAndValidity();
    }

      @HostListener('document:keydown.enter', ['$event'])
onEnterSearch(event: KeyboardEvent) {
  // Check if any mat-select panel is open - if so, don't trigger search
  const isDropdownOpen = document.querySelector('.mat-select-panel');
  if (isDropdownOpen) return;

  // Check if focus is on a button, textarea, or select - let those handle enter naturally
  const activeTag = (document.activeElement as HTMLElement)?.tagName?.toUpperCase();
  if (activeTag === 'BUTTON' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;

  event.preventDefault();
  this.Getplans();
}


  Getselectedyear(event) {
    this.ListWeeks.length = 0;
    this.ListWeeks = [];
    this.PlanForm.controls["Weekno"].setValue("");
    let totalweeks = moment(event, "YYYY").isoWeeksInYear();
    for (let i = 1; i <= totalweeks; i++) {
      // this.WeekNumbers.push(i);
      this.getDateOfISOWeek(i, event);
    }
  }

  GetWeek(wknumber, year) {
    this.date = new Date(1, 1, 2020);
    this.date.setDate(this.date.getDate() + 1);
    console.log(this.date)
  }

  getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 7) {
      this.ListWeeks.push(this.datePipe.transform(ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1), 'yyyy/MM/dd') + "  -  " + this.datePipe.transform(ISOweekStart.setDate(simple.getDate() + 7 - simple.getDay()), 'yyyy/MM/dd') + "  -  " + `${w}` );
    }
    else {
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    }
    return ISOweekStart;

  }

  GetselectedPlantype(event) {
    if (event == 1) {
      this.datefield = false;
      this.monthfield = true;
      this.yearfield = true;
      this.weekfield = true;
      this.PlanForm.controls["Date"].setValue("");
      this.PlanForm.controls["Month"].setValue("");
      this.PlanForm.controls["Year"].setValue("");
      this.PlanForm.controls["Weekno"].setValue("");
    }
    else if (event == 2) {
      this.datefield = true;
      this.monthfield = true;
      this.yearfield = false;
      this.weekfield = false;
      this.PlanForm.controls["Date"].setValue("");
      this.PlanForm.controls["Month"].setValue("");
      this.PlanForm.controls["Year"].setValue("");
      this.PlanForm.controls["Weekno"].setValue("");
    }
    if (event == 3) {
      this.datefield = true;
      this.monthfield = false;
      this.yearfield = false;
      this.weekfield = true;
      this.PlanForm.controls["Date"].setValue("");
      this.PlanForm.controls["Month"].setValue("");
      this.PlanForm.controls["Year"].setValue("");
      this.PlanForm.controls["Weekno"].setValue("");
    }
  }
  GetBuilding(event) {
    this.requstservice.GetAllBuildingsbyid(event).subscribe(res => {
      this.Buildings = res["data"];
    });
  }
//   Getplans() {
//     console.log(this.PlanForm.value)
//   //  this.plansDtodata.Site_Id=this.PlanForm.controls["Site"].value;
//     this.plansDtodata.Building_Id = this.PlanForm.controls["Building"].value;
//     this.plansDtodata.Sub_Contractor_Id = this.PlanForm.controls["subContractor"].value;
//     this.plansDtodata.Month = this.PlanForm.controls["Month"].value;
//     const dateValue = this.PlanForm.controls["Date"].value;
//     this.plansDtodata.Date = dateValue ? this.datePipe.transform(dateValue, 'yyyy-MM-dd') : "";
//     // this.plansDtodata.Date=this.datePipe.transform(this.PlanForm.controls["Date"].value, 'yyyy-MM-dd');
//     this.plansDtodata.Year=this.PlanForm.controls["Year"].value;
//     this.plansDtodata.Week=this.PlanForm.controls["Weekno"].value;
//     this.plansDtodata.Room_Type=this.PlanForm.controls["level"].value;

// // this.plansDtodata.from_date = this.datePipe.transform(this.PlanForm.controls["WorkingDateFrom"].value, 'yyyy-MM-dd');
//     // this.plansDtodata.to_date = this.datePipe.transform(this.PlanForm.controls["WorkingDateTo"].value, 'yyyy-MM-dd');
//     const fromDateValue = this.PlanForm.controls["WorkingDateFrom"].value;
// const toDateValue = this.PlanForm.controls["WorkingDateTo"].value;

// this.plansDtodata.from_date = fromDateValue ? this.datePipe.transform(fromDateValue, 'yyyy-MM-dd') : "";
// this.plansDtodata.to_date = toDateValue ? this.datePipe.transform(toDateValue, 'yyyy-MM-dd') : "";

//     this.plansDtodata.start_time = this.PlanForm.controls["StartTime"].value;
//     this.plansDtodata.end_time = this.PlanForm.controls["EndTime"].value;

//             // this.plansDtodata.Area = this.PlanForm.controls["Area"].value.toString();
// //     const statusArray = this.PlanForm.controls['area'].value;
// // this.plansDtodata.area = statusArray.map((val: string) => `'${val}'`).join(',');
//  const areaValue = this.PlanForm.controls['area'].value;
// const areasArray = Array.isArray(areaValue) ? areaValue : [areaValue]; 

// const formattedArea = areasArray
//   .filter(val => val !== null && val !== undefined && val !== '') 
//   .map((val: string) => `${val}`)
//   .join('|');

// this.plansDtodata.area = formattedArea || ""; 

// this.plansDtodata.permit_type =
//       this.PlanForm.controls['permit_type'].value.toString();
//     //  this.plansDtodata.Plans_Id=this.PlanForm.controls["Plantype"].value;

//     // if(this.PlanForm.controls["Plantype"].value==1)
//     // {
//     //    this.plansDtodata.fromDate=this.datePipe.transform(this.PlanForm.controls["Date"].value, 'yyyy-MM-dd');

//     //    this.plansDtodata.toDate=this.datePipe.transform(this.PlanForm.controls["Date"].value, 'yyyy-MM-dd');
//     //    console.log( this.plansDtodata)
//     this.GetRequestData(this.plansDtodata);

//     // }
//     // else if(this.PlanForm.controls["Plantype"].value==2)
//     // {
//     //   var mydate=moment().year(2020).week(2);
//     //   //console.log(mydate.format('YYYY-MM-DD'));
//     //   console.log(mydate.startOf('week').format('YYYY-MM-DD'));
//     //   console.log(mydate.endOf('week').format('YYYY-MM-DD'));

//     //    this.plansDtodata.fromDate=mydate.startOf('week').format('YYYY-MM-DD');
//     //     this.plansDtodata.toDate=mydate.endOf('week').format('YYYY-MM-DD');
//     //     this.GetRequestData(this.plansDtodata);

//     // }
//     // else if(this.PlanForm.controls["Plantype"].value==3)
//     // {
//     //   var mymonthdate=moment().month(this.PlanForm.controls["Month"].value);
//     //   this.plansDtodata.fromDate=mymonthdate.startOf("month").format('YYYY-MM-DD');
//     //   this.plansDtodata.toDate=mymonthdate.endOf("month").format('YYYY-MM-DD');

//     //   this.GetRequestData(this.plansDtodata);
//     // }
//   }

Getplans() {
  console.log(this.PlanForm.value);

  // ✅ Building (multiple)
  this.plansDtodata.Building_Id = this.PlanForm.controls["Building"].value;
  // this.plansDtodata.Building_Id = buildingValue && buildingValue.length
  //   ? buildingValue.join(",")
  //   : "";

  // ✅ Subcontractor
  this.plansDtodata.Sub_Contractor_Id = this.PlanForm.controls["subContractor"].value || "";

  // ✅ Month
  this.plansDtodata.Month = this.PlanForm.controls["Month"].value || "";

  // ✅ Date
  const dateValue = this.PlanForm.controls["Date"].value;
  this.plansDtodata.Date = dateValue ? this.datePipe.transform(dateValue, 'yyyy-MM-dd') : "";

  // ✅ Year & Week
  this.plansDtodata.Year = this.PlanForm.controls["Year"].value || "";
  this.plansDtodata.Week = this.PlanForm.controls["Weekno"].value || "";

  // ✅ Level (multiple → "'A','B'")
  // const levelValue = this.PlanForm.controls['level'].value || [];
  this.plansDtodata.Room_Type = this.PlanForm.controls['level'].value || [];
  // levelValue.length
  //   ? levelValue.map((val: string) => `'${val}'`).join(",")
  //   : "";

  // ✅ From / To Dates
  const fromDateValue = this.PlanForm.controls["WorkingDateFrom"].value;
  const toDateValue = this.PlanForm.controls["WorkingDateTo"].value;
  const newWorkDateValue = this.PlanForm.controls["newWorkDate"].value
  this.plansDtodata.from_date = fromDateValue ? this.datePipe.transform(fromDateValue, 'yyyy-MM-dd') : "";
  this.plansDtodata.to_date = toDateValue ? this.datePipe.transform(toDateValue, 'yyyy-MM-dd') : "";
  this.plansDtodata.new_date = newWorkDateValue ? this.datePipe.transform(newWorkDateValue, 'yyyy-MM-dd') : "";

  // ✅ Start/End Time
  this.plansDtodata.start_time = this.PlanForm.controls["StartTime"].value || "";
  this.plansDtodata.end_time = this.PlanForm.controls["EndTime"].value || "";
  this.plansDtodata.new_end_time = this.PlanForm.controls["new_end_time"].value || "";
  this.plansDtodata.night_shift = this.PlanForm.controls["night_shift"].value || "";
  this.plansDtodata.permit_under = this.PlanForm.controls["permit_under"].value || "";
  const statusValue = this.PlanForm.controls['Status'].value;
  const statusArray = Array.isArray(statusValue) ? statusValue : [statusValue]; 
  
  const formattedStatus = statusArray
    .filter(val => val !== null && val !== undefined && val !== '') 
    .map((val: string) => `'${val}'`)
    .join(',');
  
  this.plansDtodata.Request_status = formattedStatus || "";
  if(this.PlanForm.get("Hras") == null) {
    this.plansDtodata.hras = '';
  }
  if(this.PlanForm.get("Hras").value.includes('none')) {
      this.plansDtodata.hras = 'none';
      this.getHras.forEach(hras => {
    this.plansDtodata[hras.key] = "0";
  });
    }
     else {
      this.plansDtodata.hras = '';
      this.getHras.forEach(hras => {
    this.plansDtodata[hras.key] = "0";
  });
    }
    if (this.PlanForm.get("Hras").value.length > 0 && !this.PlanForm.get("Hras").value.includes('none')){
      this.PlanForm.get("Hras").value.forEach(item =>{

        this.plansDtodata[item.key] = item.value.toString()
      })
    }
     this.getHras.forEach(hras => {
  if (this.plansDtodata[hras.key] == "0") {
    delete this.plansDtodata[hras.key];
  }
});

  // ✅ Area (multiple → "A|B|C")
  const areaValue = this.PlanForm.controls['area'].value || [];
  this.plansDtodata.area = areaValue.length
    ? areaValue.join("|")
    : "";

  // ✅ Permit Type
  this.plansDtodata.permit_type = this.PlanForm.controls['permit_type'].value || "";

  // 🔥 Finally call API
  this.GetRequestData(this.plansDtodata);
}

  
      openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,
    });
  }

  GetRequestData(searchreq) {
    this.spinner = true;
    this.requstservice.GetPlans(this.plansDtodata).subscribe(res => {
      console.log(res);
      this.spinner = false;
      if (Array.isArray(res)) {
    this.Planslist = res[0]["data"];
  } else {
    console.log("errorCase", res.message);
    this.spinner = false;
    this.openSnackBar(`${res.message}`);
    this.Planslist = [];
  }
    });
  }

  

//   exportToExcel() {

// // let base64_Img:any;

// // let workbook: ExcelProper.Workbook = new Excel.Workbook();

// // let worksheet = workbook.addWorksheet('Sales Data');

// //     worksheet.mergeCells('A1', 'M1');
// //     let titleRow = worksheet.getCell('C1');
// //     titleRow.value = "ACTIVITY PERMITS WEEK 20"
// //     titleRow.font = {
// //       name: 'Calibri',
// //       size: 16,
// //       underline: 'single',
// //       bold: true,
// //       color: { argb: '0085A3' }
// //     }
// //     titleRow.alignment = { vertical: 'middle', horizontal: 'center' }



// //     this.http.get('/assets/images/logo-beam.png', { responseType: 'blob' })
// //       .subscribe(res => {
// //         const reader = new FileReader();
// //         reader.onloadend = () => {
// //            base64_Img = reader.result;                
           
// //         }

// //         reader.readAsDataURL(res); 
// //         console.log(res);
// //       });
//   //     let myLogoImage = workbook.addImage({
      
//   //       base64: base64_Img,
//   //       extension: 'png',
//   //     });
//   // //  worksheet.mergeCells('A1:B4');
//   //   worksheet.addImage(myLogoImage, 'A1:B4');

//     // let headerRow = worksheet.addRow(this.Cols);
//     // headerRow.eachCell((cell, number) => {
//     //   cell.fill = {
//     //     type: 'pattern',
//     //     pattern: 'solid',
//     //     fgColor: { argb: '4167B8' },
//     //     bgColor: { argb: '' }
//     //   }
//     //   cell.font = {
//     //     bold: true,
//     //     color: { argb: 'FFFFFF' },
//     //     size: 12
//     //   }
//     // });

    

//     this.Planslist.forEach(x=>
//       {
//         var day=new Date(x["Working_Date"]).getDay()
//         console.log(this.days_Names[day]);
//         this.DownloadExcelData.push(
//           {Company_Name:x["Company_Name"],subContractorName:x["subContractorName"],Site_Id:x["Site_Id"],
//           Building_Id:x["Building_Id"],Activity:x["Activity"],PermitNo:x["PermitNo"],
//           Start_Time:x["Start_Time"],End_Time:x["End_Time"],Request_status:x["Request_status"],
//           Notes:x["Notes"],Working_Date:x["Working_Date"],Day:this.days_Names[day]}
//         )
//       });


//       // this.DownloadExcelData.forEach(d => {
//       //    worksheet.addRow(d);
//       // });
  
//       // workbook.xlsx.writeBuffer().then((data) => {
//       //   let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//       //   fs.saveAs(blob, "ACTIVITY PERMITS WEEK 20" + '.csv');
//       // })

//       // workbook.xlsx.writeBuffer().then( data => {
//       //   const blob = new Blob( [data], {type: "application/octet-stream"} );
//       //   saveAs( blob, 'ACTIVITY_PERMITS_WEEK_20.xlsx');
//       // });

//     const rowsString: string[] = [];
//     let headerString = '';
//     let csv = '';

//     this.ModalOptions = {
//       key: '',
//       fileName: '',
//       dialogHeader: '',
//       dialogMessage: '',
//       enableDownloadExcel: true,
//       enablePrint: true,
//       dataSource: '',
//       tableData: '',
//       columns: this.Cols,
//       reportHeaderColumns: '',
//       reportFooterColumns: ''

//     };

//     this.ModalOptions.tableData =  this.DownloadExcelData;

//     this.ModalOptions.fileName = "test" + "_" + moment(new Date()).format('YYYY/MM/DD').toString();

//     for (const column of this.ModalOptions.columns) {
//       let data = column.header;
//       data = data === 'undefined' ? '' : data;
//       data = data === null ? '' : data;
//       data = data === 'null' ? '' : data;
//       headerString += data + ',';

//     }
//     csv += headerString + '\n';

//     for (let i = 0; i < this.ModalOptions.tableData.length; i++) {
//       let rowString = '';
//       let colNames = '';
//       let objValues = {};
//       let val = '';

//       const tableRow = this.ModalOptions.tableData[i];
//       for (const column of this.ModalOptions.columns) {
//         if (column.field.includes('.')) {
//           colNames = column.field.split('.');
//           objValues = tableRow[colNames[0]];
//           val = String(objValues[colNames[1]])
//             .replace(/[\n\r]+/g, '')
//             .replace(/\s{2,}/g, ' ')
//             .replace(/,/g, '')
//             .trim();
//           val = val === 'true' ? '1' : val === 'false' ? '0' : val;
//           val = val === null ? '' : val;
//           val = val === 'null' ? '' : val;
//           val = val === '0' ? '' : val;
//           val = val === 'undefined' ? '' : val;
//           rowString += val + ',';
//         } else {
//           val = String(tableRow[column.field])
//             .replace(/[\n\r]+/g, '')
//             .replace(/\s{2,}/g, ' ')
//             .replace(/,/g, '')
//             .trim();
//           val = val === 'true' ? '1' : val === 'false' ? '0' : val;
//           val = val === null ? '' : val;
//           val = val === 'null' ? '' : val;
//           val = val === '0' ? '' : val;
//           val = val === 'undefined' ? '' : val;
//           rowString += val + ',';
//         }
//       }
//       rowsString.push(rowString);
//     }

//     for (const row of rowsString) {
//       csv += row + '\n';
//     }

//     csv += this.ModalOptions.reportFooterColumns + '\n';
//     const blob = new Blob(['\uFEFF', csv], { type: 'text/csv' });
//     const link = document.createElement('a');
//     link.setAttribute('href', window.URL.createObjectURL(blob));
//     link.setAttribute(
//       'download',
//       this.ModalOptions.fileName + this.ModalOptions.key + '.csv'
//     );
//     document.body.appendChild(link); // Required for FF
//     link.click();
//   }


isValidDate(date: any): boolean {
  if (!date) return false;

  // if already a Date object
  if (date instanceof Date && !isNaN(date.getTime())) return true;

  // if ISO string or timestamp string
  if (typeof date === 'string') {
    const parsed = Date.parse(date);
    return !isNaN(parsed);
  }

  return false;
}


  exportToExcel() {
    this.DownloadExcelData.length=0;
    this.DownloadExcelData=[];
    this.dataForExcel.length=0;
    this.dataForExcel=[];
    this.Planslist.forEach(x=>
      {
        var day=new Date(x["Working_Date"]).getDay();
        if(!x["permit_type"]) {
          x["permit_type"] = "Construction";
        } 
        // this.DownloadExcelData.push(
        //   {Company_Name:x["Company_Name"],subContractorName:x["subContractorName"],Level:x["Room_Type"],
        //   Building_Name:x["building_name"],Activity:x["Activity"],PermitNo:x["PermitNo"],
        //   Start_Time:x["Start_Time"],End_Time:x["End_Time"],Request_status:x["Request_status"],
        //   Notes:x["Notes"],Working_Date:x["Working_Date"],Day:this.days_Names[day]}
        // )
        this.DownloadExcelData.push(
          {
            PermitNo: x["PermitNo"], PermitUnder: x["permit_under"] || 'Construction', PermitType:x["permit_type"] || 'Construction', ContractorName: x["subContractorName"], Sub_Contractor_Name: x['new_sub_contractor'], Building_Name: x["building_name"], Level: x["Room_Type"],
            Room_Nos: x['Room_Nos'], Activity: x["Activity"],description_of_activity: x["description_of_activity"], Rams_Number: x["rams_number"],HRAs: this.printHRAS(x),Auth:x[""],Comment: x[""],
            Start_Time: x["Start_Time"], End_Time: x["End_Time"], Night_Shift: this.nightShiftCheck(x), New_End_Time: x["new_end_time"], Request_status: x["Request_status"],
            Notes: this.formatNotes(x["Notes"]), Working_Date: x["Working_Date"], Day: this.days_Names[day], New_Date: x["new_date"], New_Day: this.findNewDay(x), CoNM_initials: x['ConM_initials'], CoMM_initials: x['CoMM_initials'], Opened_By: x['ConM_initials1'], Reject_Reason: x['reject_reason'], Cancel_Reason: x['cancel_reason']
          }
        )
      });

    this.DownloadExcelData.forEach((row: any) => {
      this.dataForExcel.push(Object.values(row))
    });

    let reportData = {
      title: 'PERMIT CO-ORDINATION SHEET',
      data: this.dataForExcel,
      headers: Object.keys(this.DownloadExcelData[0])
    }

    this.ete.exportExcel(reportData);
  }

   formatNotes(notesArr: any[]): string {
  if (!Array.isArray(notesArr) || notesArr.length === 0) return "";

  return notesArr
    .map(noteObj => {
      const username = noteObj.username || ""; // adjust field name
      const note = noteObj.note || "";      // adjust field name
      return `${username}: ${note}`;
    })
    .join("; "); // separate entries with ;
}
  
  nightShiftCheck(rows) {
    return rows["night_shift"] == 1 ? 'Yes' : 'No';
  }

  findNewDay(row) {
    if (row["new_date"] && row["new_date"] !== "00-00-0000") {
      let newDate = new Date(row["new_date"]);
      let newDayIndex = newDate.getDay();
      return this.days_Names[newDayIndex];
    }
    return ""; // Return empty string if new_date is invalid
  }
  

  printHRAS(tableData) {
    let hrasValues = [];
    Object.entries(tableData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      if ((key == "Hot_work" || key == "working_on_electrical_system" || key == "working_hazardious_substen" || key == "pressure_tesing_of_equipment" || key == "working_at_height" || key == "working_confined_spaces" || key == "work_in_atex_area" || key == "securing_facilities" || key == "excavation_works" || key == "using_cranes_or_lifting") && value == 1) {
        hrasValues.push(key)
      }
    });
    return hrasValues.toString();
  }

  Reset()
  {
    this.PlanForm.reset();
  }
  openPopUp(data) {
    let title = 'Request';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ListPopupComponent, {
      width: '1200px',
      height: '600px',
      disableClose: false,
      data: { title: title, payload: data }
    });
  }
}

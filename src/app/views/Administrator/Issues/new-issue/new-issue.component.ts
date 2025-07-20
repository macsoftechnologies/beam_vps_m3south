import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/shared/services/request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Issues } from 'app/views/Models/IssuesDto';
import { SubcontractorService } from 'app/shared/services/subcontractor.service';
import { forkJoin } from 'rxjs';
import { IssuesService } from 'app/shared/services/issues.service';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {
  siteslist: any[] = [];
  buildings: any[] = [];
  nositemselect: boolean = true;
  nobuildingmselect: boolean = true;
  nofloorselected: boolean = true;
  isnewrequestcreated: boolean = false;
  IssueForm: FormGroup;
  IssuesDto:any={};
  floors: any;
  RoomsList: any;
  SubContractors: any;
  minDate: Date;
  maxDate: Date;
  IssueTypes:any[]=
  [
    {id:1,Name:"Maintenance"},
    {id:2,Name:"Construction"}
  ]
  images: any[]=[];
  isimguploaded: boolean;
  base64Images: any=[];
  userData:any={};
  Site_name:string="";
  spinner:boolean=false;
  pdfSrc = "../assets/images/complete-plan/1complete_plan_invisible.pdf";

  constructor(private fb: FormBuilder, private requestsserivies: RequestService,
    private subcntrservice:SubcontractorService, private issueservice:IssuesService,
    private jwtservice:JwtAuthService,private datePipe: DatePipe, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.userData=this.jwtservice.getUser();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.IssueForm = this.fb.group({
      Site: ['', Validators.required],
      Building: ['', Validators.required],
      FloorName: ['', Validators.required],
      RoomNo: ['', Validators.required],
      SubContractor: ['', Validators.required],
      IssueType: ['', Validators.required],
      Notes: ['', Validators.required],
      IssueCompleteDate: ['', Validators.required],
      IssueStatus: ['', Validators.required],
    });
this.spinner=true;
    forkJoin(this.requestsserivies.GetAllSites(),this.subcntrservice.GetAllSubContractors()).subscribe(res => {
      this.siteslist = res[0]["data"];
      this.IssueForm.controls.Site.setValue(res[0]["data"][1]["site_name"]);
      this.Site_name=res[0]["data"][1]["site_name"];
      this.nositemselect=false;
      this.IssuesDto.siteId=res[0]["data"][1]["site_id"];
      this.requestsserivies.GetAllBuildingsbyid(this.IssuesDto.siteId).subscribe(res => {
        this.buildings = res["data"];
        
      });
      this.SubContractors = res[1]["data"];
      this.spinner=false;
    });
  }

  GetselectedBuildingitem(event) {
    this.spinner=true;
    this.buildings.forEach(x => {
      if (x['build_id'] == event) {
        this.IssueForm.controls['Building'].setValue(x['building_name']);
      }
    });
    this.IssuesDto.buildingId=event;
    this.requestsserivies.GetAllFloorsbyid(event).subscribe(res => {
      this.floors = res["data"];
      this.nobuildingmselect=false;
      this.spinner=false;
    });
  }

  Getselectedflooritem(event) {
  this.IssuesDto.floorId=event;
  this.spinner=true;
  this.floors.forEach(x => {
    if (x['fl_id'] == event) {
      this.IssueForm.controls['FloorName'].setValue(x['floor_status']);
    }
  });

    this.requestsserivies.GetAllRoomsbyid(event).subscribe(res => {
      this.RoomsList = res["data"];
      this.nofloorselected=false;
      this.spinner=false;
    });
  }
  Getselectedroomitem(event) {
    this.spinner=true;
    let selectedroom:string = event.toString();
    this.IssueForm.controls["RoomNo"].setValue(selectedroom.split(','));
    this.spinner=false;
    this.isnewrequestcreated=true;
  }


  csvInputChange(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.images.push(e.target.files[i]);
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(e.target.files[i]);
      this.isimguploaded = true;
    }
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
   this.base64Images.push(reader.result);
  }
  CreateIssue()
  {
    this.spinner=true;
    var formData=new FormData();
    for (var i = 0; i < this.images.length; i++) {
      formData.append("issueimage[]", this.images[i]);
    }
    formData.append('userId', this.userData["id"]);
    formData.append('siteId', this.IssuesDto.siteId);
    formData.append('buildingId', this.IssuesDto.buildingId);
    formData.append('floorId', this.IssuesDto.floorId);
    formData.append('roomId', this.IssueForm.controls.RoomNo.value);
    formData.append('subcontractorId', this.IssueForm.controls.SubContractor.value);
    formData.append('issueType', this.IssueForm.controls.IssueType.value);
    formData.append('notes', this.IssueForm.controls.Notes.value);
    formData.append('issueComplete',this.datePipe.transform(this.IssueForm.controls["IssueCompleteDate"].value, 'yyyy-MM-dd'));
    formData.append('issueStatus', "Open");

    this.issueservice.CreateIssues(formData).subscribe(res=>
      {
        console.log(res);
        this.spinner=false;
        this.openSnackBar("Issue Created Successfully")
      });

  }
  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,
    });
  }
}

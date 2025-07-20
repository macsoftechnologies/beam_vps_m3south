import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'app/shared/services/user.service';
import { EmployeeService } from 'app/shared/services/employee.service';
import { TeamsDto, UpdateTeamsDto } from 'app/views/Models/TeamsDto';
import { ThemeService } from 'ng2-charts';
import { TeamService } from 'app/shared/services/team.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubcontractorService } from 'app/shared/services/subcontractor.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  spinner:boolean=false;
  TeamForm: FormGroup;
  Emps:any[]=[];
  editform:boolean=false;
  SubContractors:any[]=[];
  team:TeamsDto={
    teamName:null,
    employeeIds:null,
    subContId:null
  }
  updateteam:UpdateTeamsDto=
  {
    id:null,
    teamName:null,
    employeeIds:null,
    subContId:null
  }
  constructor(private fb: FormBuilder, private empservice: EmployeeService,
    private sunctrservice:SubcontractorService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any[],
    private teamsservice:TeamService,private _snackBar: MatSnackBar) { 
      this.spinner=true;
      this.sunctrservice.GetAllSubContractors().subscribe(res=>{
        this.spinner=false;
        this.SubContractors=res["data"];
      });
  }

  ngOnInit(): void {
    this.TeamForm = this.fb.group({
    //  TeamId: ['', [Validators.required]],
      TeamName: ['', Validators.required],
      EmpTeam: ['', Validators.required],
      subcontrval: ['', Validators.required],
     // Emps: ['', Validators.required]
    });

    if (this.data != null && this.data["editform"] == true) {
      this.editform = true;
      this.updateteam.id=this.data["payload"]["id"];
      this.TeamForm.controls["TeamName"].setValue(this.data["payload"]["teamName"]);
      this.TeamForm.controls["subcontrval"].setValue(this.data["payload"]["subContId"]);
      this.GetEmployees(this.data["payload"]["subContId"]);
    }
  }

  GetEmployees(event)
  {
    this.spinner=true;
    this.empservice.GetAllEmployeesBySubContrId(event).subscribe(x=>
      {

        this.spinner=false;
        this.Emps=x["data"];
        var arrval=this.data["payload"]["employeeIds"].split(',');
        this.TeamForm.controls["EmpTeam"].setValue(arrval);  
      });
  }
  CreateTeam()
  {
    this.spinner=true;
    this.team.subContId=this.TeamForm.controls["subcontrval"].value;
    this.team.teamName=this.TeamForm.controls["TeamName"].value;
    var empids=this.TeamForm.controls["EmpTeam"].value;
    this.team.employeeIds=empids.toString();
    
    this.teamsservice.CreateTeams(this.team).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Team Created Successfully");
        this.TeamForm.reset();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
      }
      )
  }

  UpdateTeam()
  {
    this.spinner=true;
    this.updateteam.subContId=this.TeamForm.controls["subcontrval"].value;
    this.updateteam.teamName=this.TeamForm.controls["TeamName"].value;
    var empids=this.TeamForm.controls["EmpTeam"].value;
    this.updateteam.employeeIds=empids.toString();
    this.teamsservice.UpdateTeams(this.updateteam).subscribe(res=>
      {
        this.spinner=false;
        this.openSnackBar("Team Updated Successfully");
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

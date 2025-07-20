import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { DepartmentComponent } from './Departments/department/department.component';
import { ListDepartmentComponent } from './Departments/list-department/list-department.component';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { TeamComponent } from './Teams/team/team.component';
import { SubContractorComponent } from './SubContractors/sub-contractor/sub-contractor.component';
import { ListSubcontractorsComponent } from './SubContractors/list-subcontractors/list-subcontractors.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ListTeamsComponent } from './Teams/list-teams/list-teams.component';
import { ListSubEmpComponent } from './SubContractors/list-sub-emp/list-sub-emp.component';
import { TeamSubEmpListComponent } from './Teams/team-sub-emp-list/team-sub-emp-list.component';
import { ActivityComponent } from './Activities/activity/activity.component';
import { ListActivityComponent } from './Activities/list-activity/list-activity.component';
import { SafetyprecautionComponent } from './SafetyPrecautions/safetyprecaution/safetyprecaution.component';
import { ListSafetyprecautionComponent } from './SafetyPrecautions/list-safetyprecaution/list-safetyprecaution.component';
import { DeleteOptionComponent } from './delete-option/delete-option.component';
import { DeptEmpsComponent } from './Departments/dept-emps/dept-emps.component';
import { NewIssueComponent } from './Issues/new-issue/new-issue.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [DepartmentComponent, ListDepartmentComponent, EmployeeComponent, ListEmployeeComponent, TeamComponent, SubContractorComponent, ListSubcontractorsComponent, ListTeamsComponent, ListSubEmpComponent, TeamSubEmpListComponent, ActivityComponent, ListActivityComponent, SafetyprecautionComponent, ListSafetyprecautionComponent, DeleteOptionComponent, DeptEmpsComponent, NewIssueComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    SharedMaterialModule,
    AdministratorRoutingModule
  ],
  providers:[
    DatePipe,
  ]
})
export class AdministratorModule { }

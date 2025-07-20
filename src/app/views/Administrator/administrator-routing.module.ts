import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './Departments/department/department.component';
import { ListDepartmentComponent } from './Departments/list-department/list-department.component';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { TeamComponent } from './Teams/team/team.component';
import { SubContractorComponent } from './SubContractors/sub-contractor/sub-contractor.component';
import { ListSubcontractorsComponent } from './SubContractors/list-subcontractors/list-subcontractors.component';
import { ListTeamsComponent } from './Teams/list-teams/list-teams.component';
import { UserRoleGuard } from 'app/shared/guards/user-role.guard';
import { config } from 'config';
import { ListActivityComponent } from './Activities/list-activity/list-activity.component';
import { ActivityComponent } from './Activities/activity/activity.component';
import { SafetyprecautionComponent } from './SafetyPrecautions/safetyprecaution/safetyprecaution.component';
import { ListSafetyprecautionComponent } from './SafetyPrecautions/list-safetyprecaution/list-safetyprecaution.component';
import { ChangepasswordComponent } from '../AccountManagement/changepassword/changepassword.component';
import { NewIssueComponent } from './Issues/new-issue/new-issue.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "department",
        component: DepartmentComponent,
        data: { title: "", breadcrumb: "department",roles: config.authRoles.admin  },
        canActivate: [UserRoleGuard],
       // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "listdepartment",
        component: ListDepartmentComponent,
        data: { title: "", breadcrumb: "listdepartment",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "employee",
        component: EmployeeComponent,
        data: { title: "", breadcrumb: "employee",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "listemployee",
        component: ListEmployeeComponent,
        data: { title: "", breadcrumb: "listemployee",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "Team",
        component: TeamComponent,
        data: { title: "", breadcrumb: "Team",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "list-team",
        component: ListTeamsComponent,
        data: { title: "", breadcrumb: "Team",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "sub-contractors",
        component: SubContractorComponent,
        data: { title: "", breadcrumb: "Team",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "subcontractors-list",
        component: ListSubcontractorsComponent,
        data: { title: "", breadcrumb: "Team",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "activity",
        component: ActivityComponent,
        data: { title: "", breadcrumb: "activity",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "activity-list",
        component: ListActivityComponent,
        data: { title: "", breadcrumb: "activity list",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },

      {
        path: "safety-precaution",
        component: SafetyprecautionComponent,
        data: { title: "", breadcrumb: "safety-precaution",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "safety-precautions-list",
        component: ListSafetyprecautionComponent,
        data: { title: "", breadcrumb: "safety-precautions-list",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "new-issue",
        component: NewIssueComponent,
        data: { title: "", breadcrumb: "new-issue",roles: config.authRoles.admin },
        canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "changepassword",
        component: ChangepasswordComponent,
        data: { title: "", breadcrumb: "changepassword",}
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }

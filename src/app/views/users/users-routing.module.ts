import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewRequestComponent } from './Requests/new-request/new-request.component';
import { ListRequestComponent } from './Requests/list-request/list-request.component';
import { PlansComponent } from './plans/plans.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ListPlansComponent } from './plans/list-plans/list-plans.component';
import { UserRoleGuard } from 'app/shared/guards/user-role.guard';
import { config } from 'config';
import { DocsComponent } from './docs/docs.component';
import { LogsHistoryComponent } from './logs-history/logs-history.component';

export const usersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "dashboard", breadcrumb: "dashboard",roles: config.authRoles.subcontractor },
        canActivate: [UserRoleGuard],
        // canActivate: [UserRoleGuard],
        // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
      },
      {
        path: "new-request",
        component: NewRequestComponent,
        data: { title: "", breadcrumb: "new-request",roles: config.authRoles.subcontractor },
        canActivate: [UserRoleGuard],
      },
      {
        path: "list-request",
        component: ListRequestComponent,
        data: { title: "", breadcrumb: "list-request",roles: config.authRoles.subcontractor },
        canActivate: [UserRoleGuard],
      },
      {
        path: "plans",
        component: PlansComponent,
        data: { title: "", breadcrumb: "plans",roles: config.authRoles.subcontractor },
        canActivate: [UserRoleGuard],
      },
      {
        path: "list-plans",
        component: ListPlansComponent,
        data: { title: "", breadcrumb: " list-plans",roles: config.authRoles.subcontractor }
      },
     
      {
        path: "notifications",
        component:NotificationsComponent,
        data: { title: "", breadcrumb: "notifications",roles: config.authRoles.subcontractor }
      },
      {
        path: "log-history",
        component:LogsHistoryComponent,
        data: { title: "", breadcrumb: "log-history",roles: config.authRoles.subcontractor }
      },
      {
        path: "mydocs",
        component:DocsComponent,
        data: { title: "", breadcrumb: "docs",roles: config.authRoles.subcontractor }
      }
    ]
  }
];

// const routes: Routes = [
//   {
//     path: "dashboard",
//     component: DashboardComponent,
//     // canActivate: [UserRoleGuard],
//     // data: { title: "Default", breadcrumb: "Default", roles: config.authRoles.sa }
//   },
//   {
//     path: "new-request",
//     component: NewRequestComponent,
//     data: { title: "new-request", breadcrumb: "new-request" }
//   },
//   {
//     path: "list-request",
//     component: ListRequestComponent,
//     data: { title: "list-request", breadcrumb: "list-request" }
//   },
//   {
//     path: "plans",
//     component: PlansComponent,
//     data: { title: "plans", breadcrumb: "plans" }
//   },
//   {
//     path: "notifications",
//     component: Notification,
//     data: { title: "notifications", breadcrumb: "notifications" }
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class UsersRoutingModule { }

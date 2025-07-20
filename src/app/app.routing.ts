import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AppUsersComponent } from './views/others/app-users/app-users.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { config } from 'config';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'user/dashboard', 
    pathMatch: 'full' 
  },
    {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path:'',
    component:UserLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'user',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule), 
       // data: { roles: [config.authRoles.user] }
      },
      {
        path:'admin',
        loadChildren: () => import('./views/Administrator/administrator.module').then(m => m.AdministratorModule), 
       // data: { roles: [config.authRoles.admin] }
      },
    ]
      },
      
  // {
  //   path: '', 
  //   component: AuthLayoutComponent,
  //   children: [
  //     { 
  //       path: 'sessions', 
  //       loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
  //       data: { title: 'Session'} 
  //     }
  //   ]
  // },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'others', 
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule), 
        data: { title: 'Others', breadcrumb: 'OTHERS'}
      },
      {
        path: 'search', 
        loadChildren: () => import('./views/search-view/search-view.module').then(m => m.SearchViewModule)
      }
    ]
  },

  // { 
  //   path: '**', 
  //   redirectTo: 'sessions/404'
  // }
];

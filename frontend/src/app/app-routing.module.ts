import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './dashboard/layout/layout.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { MapComponent } from './dashboard/map/map.component';
import { AlertComponent } from './dashboard/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/index/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'map', component: MapComponent },
      { path: 'alert', component: AlertComponent }
    ]
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' } // Redirect any unmatched route to '/dashboard'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
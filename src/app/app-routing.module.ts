import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/index/dashboard.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { MapComponent } from './dashboard/map/map.component';
import { AlertComponent } from './dashboard/alert/alert.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/history', component: HistoryComponent },
  { path: 'dashboard/map', component: MapComponent },
  { path: 'dashboard/alert', component: AlertComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' } // Redirect any unmatched route to '/dashboard'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
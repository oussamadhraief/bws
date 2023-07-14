import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/index/dashboard.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { DashboardModule } from './dashboard/index/dashboard.module';
import { HistoryModule } from './dashboard/history/history.module';
import { MapComponent } from './dashboard/map/map.component';
import { AlertComponent } from './dashboard/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HistoryComponent,
    MapComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HistoryModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

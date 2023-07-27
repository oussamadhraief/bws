import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { MapComponent } from './dashboard/map/map.component';
import { AlertComponent } from './dashboard/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { LayoutModule } from './dashboard/layout/layout.module';
import { HistoryModule } from './dashboard/history/history.module';
import { AlertModule } from './dashboard/alert/alert.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MapModule } from './dashboard/map/map.module';
import { DashboardComponent } from './dashboard/index/dashboard.component';
import { DashboardModule } from './dashboard/index/dashboard.module';
import { DxChartModule } from 'devextreme-angular';
import {
  DxDataGridModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';
import { PumpsChartComponent } from './components/pumps-chart/pumps-chart.component';
import { PumpsChartModule } from './components/pumps-chart/pumps-chart.module';
import { PumpsTableComponent } from './components/pumps-table/pumps-table.component';
import { TanksChartModule } from './components/tanks-chart/tanks-chart.module';
import { TanksTableModule } from './components/tanks-table/tanks-table.module';
import { TanksTableComponent } from './components/tanks-table/tanks-table.component';
import { TanksChartComponent } from './components/tanks-chart/tanks-chart.component';
import { AddTankModalComponent } from './components/add-tank-modal/add-tank-modal.component';
import { AddPumpModalComponent } from './components/add-pump-modal/add-pump-modal.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DatePickerModule } from './components/date-picker/date-picker.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HistoryComponent,
    MapComponent,
    AlertComponent,
    PumpsChartComponent,
    PumpsTableComponent,
    TanksChartComponent,
    TanksTableComponent,
    AddTankModalComponent,
    AddPumpModalComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
    HistoryModule,
    PumpsChartModule,
    TanksChartModule,
    TanksTableModule,
    MapModule,
    AlertModule,
    DxChartModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DatePickerModule,
    DxDateBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPumpModalComponent } from 'src/app/components/add-pump-modal/add-pump-modal.component';
import { AddTankModalComponent } from 'src/app/components/add-tank-modal/add-tank-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
  isTankButtonsVisible = false
  isPumpButtonsVisible = false

  constructor(private dialogRef: MatDialog) {}

  openAddNewTankModal(){
    this.dialogRef.open(AddTankModalComponent)
    this.isTankButtonsVisible = false
  }
  openAddNewPumpModal(){
    this.dialogRef.open(AddPumpModalComponent)
    this.isPumpButtonsVisible = false
  }
  
  handlePumpButtons = () => {
    this.isPumpButtonsVisible = !this.isPumpButtonsVisible
    this.isTankButtonsVisible = false
  }
  
  handleTankButtons = () => {
    this.isTankButtonsVisible = !this.isTankButtonsVisible
    this.isPumpButtonsVisible = false
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})

export class HistoryComponent {
  
  tankTabVisible = true

  constructor() {}


  handleTabChange(state: boolean) {
    this.tankTabVisible = state
  }
}

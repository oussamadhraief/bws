import { Component } from '@angular/core';
import { locale } from 'devextreme/localization';

// Set French as the default locale
locale('fr');

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent {
  now: Date = new Date();
}

import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialComponents = [
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatSidenavModule
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule { }

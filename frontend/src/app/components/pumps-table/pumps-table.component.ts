import { Component } from '@angular/core';

@Component({
  selector: 'app-pumps-table',
  templateUrl: './pumps-table.component.html',
})
export class PumpsTableComponent {
    dataSource: any[] = [{
        "Pompe": 1,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 1,
        "Date": '23/03/2023 - 08:20',
        "Quantité (L)": '45',
        "Véhicule": '5879',
      },{
        "Pompe": 1,
        "Date": '22/03/2023 - 09:20',
        "Quantité (L)": '28',
        "Véhicule": '4582',
      },{
        "Pompe": 2,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '86',
        "Véhicule": '-',
      },{
        "Pompe": 2,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 2,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 3,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 3,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 3,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 4,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 4,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 4,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 5,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 5,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 5,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 6,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 6,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 6,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 7,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 8,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 9,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 10,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 11,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 12,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 13,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      },{
        "Pompe": 14,
        "Date": '22/03/2023 - 08:20',
        "Quantité (L)": '35',
        "Véhicule": '5486',
      }];

  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector: any = true;

  showInfo: any = true;

  showNavButtons: any = true;

  customizeColumns(columns: any) {
    columns[0].width = 70;
  }

  get isCompactMode() {
    return this.displayMode === 'compact';
  }
}

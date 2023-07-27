import { Component } from '@angular/core';

@Component({
  selector: 'app-tanks-table',
  templateUrl: './tanks-table.component.html',
})
export class TanksTableComponent {
  dataSource: any[] = [
    {
      Citerne: 1,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 1,
      Date: '23/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5879',
    },
    {
      Citerne: 1,
      Date: '22/03/2023 - 09:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '4582',
    },
    {
      Citerne: 2,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '-',
    },
    {
      Citerne: 2,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 2,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 3,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 3,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 3,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 4,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 4,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 4,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 5,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 5,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 5,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 6,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 6,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 6,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 7,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 8,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 9,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 10,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 11,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 12,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 13,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
    {
      Citerne: 14,
      Date: '22/03/2023 - 08:20',
      initialVolume: '35',
      addedQuantity: '30',
      Siphonage: '0',
      finalVolume: '65',
      Véhicule: '5486',
    },
  ];

  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [
    { text: "Display Mode 'full'", value: 'full' },
    { text: "Display Mode 'compact'", value: 'compact' },
  ];

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

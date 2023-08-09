import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddPumpModalComponent } from 'src/app/components/add-pump-modal/add-pump-modal.component';
import { AddTankModalComponent } from 'src/app/components/add-tank-modal/add-tank-modal.component';
import { PumpsService } from 'src/app/services/pumps/pumps.service';
import { TanksService } from 'src/app/services/tanks/tanks.service';
import { IPump, ITank } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  loadingTanks: boolean = true;
  loadingPumps: boolean = true;

  tanks: ITank[] = [];
  pumps: IPump[] = [];
  filteredTanks: ITank[] = [];
  filteredPumps: IPump[] = [];

  isTankButtonsVisible = false;
  isPumpButtonsVisible = false;

  tanksSelectOpen = false;
  natureSelectOpen = false;


  isPumpsSelectOpen = false;
  isTanksSelectOpen = false;
  isNatureSelectOpen = false;

  tankFilters = { selectedTank: 0, selectedNature: 'all' };
  pumpFilters = { selectedPump: 0, selectedTank: 0, selectedNature: 'all' };

  natures: Set<string> = new Set<string>();
  selectTanks: Set<number> = new Set<number>();

  private tanksSubscription: Subscription = new Subscription();
  private pumpsSubscription: Subscription = new Subscription();

  constructor(
    private dialogRef: MatDialog,
    private tanksService: TanksService,
    private pumpsService: PumpsService
  ) {}

  ngOnInit(): void {
    this.tanksSubscription = this.loadTanks();
    this.pumpsSubscription = this.loadPumps();
  }

  ngOnDestroy(): void {
    // Unsubscribe from subscriptions to avoid memory leaks
    this.tanksSubscription.unsubscribe();
    this.pumpsSubscription.unsubscribe();
  }

  extractUniqueNatures(pumps: IPump[]) {
    pumps.forEach((pump) => {
      this.natures.add(pump.nature);
    });
  }

  get uniqueNaturesArray(): string[] {
    return Array.from(this.natures);
  }

  extractUniqueTanks(pumps: IPump[]) {
    pumps.forEach((pump) => {
      this.selectTanks.add(pump.tankId);
    });
  }

  get uniqueTanksArray(): number[] {
    return Array.from(this.selectTanks);
  }

  loadTanks(): Subscription {
    return this.tanksService.findAll().subscribe((tanks) => {
      this.tanks = tanks;
      this.loadingTanks = false;
      this.checkLoadingComplete();
    });
  }
  
  loadPumps(): Subscription {
    return this.pumpsService.findAll().subscribe((pumps) => {
      this.pumps = pumps;
      this.loadingPumps = false;
      this.checkLoadingComplete();
    });
  }

  checkLoadingComplete() {
    if (!this.loadingTanks && !this.loadingPumps) {
      this.extractUniqueNatures(this.pumps);
      this.extractUniqueTanks(this.pumps);
      this.filterPumps();
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: any) {
    if (!event.target.closest('.relative')) {
      this.isPumpsSelectOpen = false;
    }
  }

  filterPumps() {
    this.filteredPumps = this.pumps.filter((pump) => {
      const idMatch =
        this.pumpFilters.selectedPump == 0 || pump.id === this.pumpFilters.selectedPump;
      const tankMatch =
        this.pumpFilters.selectedTank == 0 ||
        pump.tankId === this.pumpFilters.selectedTank;
      const natureMatch =
        this.pumpFilters.selectedNature == 'all' ||
        pump.nature === this.pumpFilters.selectedNature;

      return idMatch && tankMatch && natureMatch;
    });
  }

  selectPump(id: any) {
    this.pumpFilters.selectedPump = id;
    this.isPumpsSelectOpen = false;
    this.filterPumps();
  }

  selectTank(id: any) {
    this.pumpFilters.selectedTank = id;
    this.isTanksSelectOpen = false;
    this.filterPumps();
  }

  selectNature(nature: any) {
    this.pumpFilters.selectedNature = nature;
    this.isNatureSelectOpen = false;
    this.filterPumps();
  }

  openAddNewTankModal() {
    this.dialogRef.open(AddTankModalComponent);
    this.isTankButtonsVisible = false;
  }
  openAddNewPumpModal() {
    this.dialogRef.open(AddPumpModalComponent);
    this.isPumpButtonsVisible = false;
  }

  handlePumpButtons = () => {
    this.isPumpButtonsVisible = !this.isPumpButtonsVisible;
    this.isTankButtonsVisible = false;
  };

  handleTankButtons = () => {
    this.isTankButtonsVisible = !this.isTankButtonsVisible;
    this.isPumpButtonsVisible = false;
  };
}

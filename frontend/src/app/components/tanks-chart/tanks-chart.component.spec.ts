import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanksChartComponent } from './tanks-chart.component';

describe('TanksChartComponent', () => {
  let component: TanksChartComponent;
  let fixture: ComponentFixture<TanksChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanksChartComponent]
    });
    fixture = TestBed.createComponent(TanksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

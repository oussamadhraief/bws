import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpsChartComponent } from './pumps-chart.component';

describe('PumpsChartComponent', () => {
  let component: PumpsChartComponent;
  let fixture: ComponentFixture<PumpsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PumpsChartComponent]
    });
    fixture = TestBed.createComponent(PumpsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpsTableComponent } from './pumps-table.component';

describe('PumpsTableComponent', () => {
  let component: PumpsTableComponent;
  let fixture: ComponentFixture<PumpsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PumpsTableComponent]
    });
    fixture = TestBed.createComponent(PumpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

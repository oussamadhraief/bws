import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanksTableComponent } from './tanks-table.component';

describe('TanksTableComponent', () => {
  let component: TanksTableComponent;
  let fixture: ComponentFixture<TanksTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanksTableComponent]
    });
    fixture = TestBed.createComponent(TanksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

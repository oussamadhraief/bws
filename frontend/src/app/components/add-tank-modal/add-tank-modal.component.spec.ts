import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTankModalComponent } from './add-tank-modal.component';

describe('AddTankModalComponent', () => {
  let component: AddTankModalComponent;
  let fixture: ComponentFixture<AddTankModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTankModalComponent]
    });
    fixture = TestBed.createComponent(AddTankModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

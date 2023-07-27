import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPumpModalComponent } from './add-pump-modal.component';

describe('AddPumpModalComponent', () => {
  let component: AddPumpModalComponent;
  let fixture: ComponentFixture<AddPumpModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPumpModalComponent]
    });
    fixture = TestBed.createComponent(AddPumpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tank-modal',
  templateUrl: './add-tank-modal.component.html',
})
export class AddTankModalComponent {

  formData = { id: '', capacity: '', nature: '', site: ''}

  onSubmit() {
    console.log(this.formData);
  }
  
}

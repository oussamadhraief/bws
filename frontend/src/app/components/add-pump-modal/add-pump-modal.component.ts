import { Component } from '@angular/core';

@Component({
  selector: 'app-add-pump-modal',
  templateUrl: './add-pump-modal.component.html'
})
export class AddPumpModalComponent {

  formData = { id: '', capacity: '', nature: '', site: ''}

  onSubmit() {
    console.log(this.formData);
  }
}

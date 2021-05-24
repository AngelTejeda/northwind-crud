import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import CustomerModels from 'src/app/models/customer-models';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.page.html',
  styleUrls: ['./customer-input.page.scss'],
})
export class CustomerInputPage implements OnInit {

  @Input() id: string;
  @Input() company: string;
  @Input() contactFullName: string;
  @Input() contactPosition: string;
  @Input() contactPhone: string;
  @Input() edit: boolean;
  @Input() agregar: boolean;

  @Output() element = new EventEmitter();

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salir() {
    this.modalController.dismiss();
  }

  // Emite un evento con la información del registro modificado.
  emitUpdateEvent() {
    let modifiedCustomer = {
      id: this.id,
      company: this.company,
      contactFullName: this.contactFullName,
      contactPhone: this.contactPhone,
      contactPosition: this.contactPhone
    }

    this.element.emit(modifiedCustomer);
  }

  // Emite un evento con la información del nuevo registro.
  emitPostEvent() {
    let customer = {
      id: this.id,
      company: this.company,
      contactFullName: this.contactFullName,
      contactPhone: this.contactPhone,
      contactPosition: this.contactPhone
    }

    this.element.emit(customer);
  }
}

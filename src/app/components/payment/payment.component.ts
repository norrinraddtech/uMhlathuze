import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {
@Output('openInvoice') open: EventEmitter<boolean> = new EventEmitter()
@Output('backToAccounts') backToAccounts: EventEmitter<boolean> = new EventEmitter();
  invoices = [
    { status: 0, payment: 'Pending', date: '12.02.2023', amount: 89238.90 },
    { status: 1, payment: 'Completed', date: '12.03.2023', amount: 1234.78 },
    { status: 1, payment: 'Completed', date: '12.04.2023', amount: 89238.78 }
  ];
  constructor() { }

  ngOnInit() {}

  openInvoice = () => {
    this.open.emit(true);
  }

  navigateBackToAccounts = () => {
    this.backToAccounts.emit(true)
  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent  implements OnInit {

  @Input('active') active: boolean = true;
  @Output('openInvoicePDF') openInvoicePDF: EventEmitter<boolean> = new EventEmitter();
  @Output('backToPayment') backToPayment: EventEmitter<boolean> = new EventEmitter();
  @Output('backToAccounts') backToAccounts: EventEmitter<boolean> = new EventEmitter();
  invoices = [
    {invoiceId: 4500000842, date: '12.02.2023', amount: 89238.90 },
    {invoiceId: 4500000842, date: '12.02.2023', amount: 89238.78 }
  ];
  constructor() { }

  ngOnInit() {
    let nativeLabel = document.getElementById('button_label')
    let navtiveValue = document.getElementById('button_label')
    if (this.active && nativeLabel && navtiveValue) {
      nativeLabel.style.background = 'black'
      navtiveValue.style.color = 'white'
    }
  }

  open = () => {
    this.openInvoicePDF.emit(true)
  }

  navigateBackToPayments = () => {
    this.backToPayment.emit(true)
  }

  navigateBackToAccounts = () => {
    this.backToAccounts.emit(true)
  }
}

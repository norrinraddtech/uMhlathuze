import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent  implements OnInit {

  @Output('openInvoicePDF') openInvoicePDF: EventEmitter<boolean> = new EventEmitter();
  invoices = [
    {invoiceId: 4500000842, date: '12.02.2023', amount: 89238.90 },
    {invoiceId: 4500000842, date: '12.02.2023', amount: 89238.78 }
  ];
  constructor() { }

  ngOnInit() {}

  open = () => {
    this.openInvoicePDF.emit(true)
  }
}

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {  } from 'stream';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent  implements OnInit {
@Output('openInvoice') openInvoice: EventEmitter<any> = new EventEmitter();

  invoices = [
    {invoiceId: 450000239843, date: '12/02/23', amount: 89238 },
    {invoiceId: 450000239843, date: '12/02/23', amount: 89238 }
  ];
  constructor() { }

  ngOnInit() {}

  open = () => {
    this.openInvoice.emit('true');
  }
}

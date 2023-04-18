import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent  implements OnInit {

  invoices = [
    {invoiceId: 450000239843, date: '12/02/23', amount: 89238 },
    {invoiceId: 450000239843, date: '12/02/23', amount: 89238 }
  ];
  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  invoices = [
    {invoiceId: 450000239843, date: '12/02/23', amount: 89238 },
    {invoiceId: 450000239843, date: '12/02/23', amount: 89238 }
  ];
  constructor() { }

  ngOnInit() {
  }

}

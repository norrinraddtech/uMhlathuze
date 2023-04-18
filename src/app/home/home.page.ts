import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  invoices = [
    {invoiceId: 4500000842, date: '12.02.2023', amount: 89238.90 },
    {invoiceId: 4500000842, date: '12.02.2023', amount: 89238.78 }
  ];

  
  constructor() { }

  ngOnInit() {
  }

}

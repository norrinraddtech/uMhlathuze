import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {

  invoices = [
    {payment: 'Pending', date: '12.02.2023', amount: 89238.90 },
    {payment: 'Completed', date: '12.03.2023', amount: 1234.78 },
    {payment: 'Completed', date: '12.04.2023', amount: 89238.78 }
  ];
  constructor() { }

  ngOnInit() {}

}

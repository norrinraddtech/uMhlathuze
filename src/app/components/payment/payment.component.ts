import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {
  @Input('active') active: boolean = true;
  @Output('openInvoice') open: EventEmitter<boolean> = new EventEmitter()
  @Output('backToAccounts') backToAccounts: EventEmitter<boolean> = new EventEmitter();
  invoices = [
    { status: 1, payment: 'Completed', date: '12.02.2023', amount: 89238.90 },
    { status: 1, payment: 'Completed', date: '12.03.2023', amount: 1234.78 },
    { status: 1, payment: 'Completed', date: '12.04.2023', amount: 89238.78 },
  ];
  
  constructor() { }
  
  ngOnInit() 
  {
    let nativeLabel = document.getElementById('button_label')
    let navtiveValue = document.getElementById('button_label')
    if (this.active && nativeLabel && navtiveValue) {
      nativeLabel.style.background = 'black'
      navtiveValue.style.color = 'white'
    }
  }
  
  openInvoice = () => {
    this.open.emit(true);
  }
  
  navigateBackToAccounts = () => {
    this.backToAccounts.emit(true)
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  invoices = false;
  showHome = true;
  showInvoicePDF = false
  showPayment = false;
  showBankCard = true;
  url = 'assets/images/bills-invoice.pdf'
  
  constructor() { }

  ngOnInit() {
  }

  openInvoice = (event: any) => {
    this.invoices = event;
    this.showHome = !event
  }

  openHome = () => {
    this.showHome = true;
    this.invoices = false;
  }

  close = () => {
    this.invoices = true;
    this.showHome = false;
    this.showInvoicePDF = false;
  }

  openPDF = () => {
    this.invoices = false;
    this.showInvoicePDF = true;
  }

}

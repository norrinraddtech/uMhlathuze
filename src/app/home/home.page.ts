import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  invoices = false;
  showHome = true;
  showInvoicePDF = false;
  showPayment = false;
  showBankCard = false;
  showAddCard = false;
  url = 'assets/images/bills-invoice.pdf'
  
  constructor() { }

  ngOnInit() {
  }

  openBankCard = () => {
    this.showBankCard = true
    this.showHome = false
    this.showPayment = false
    this.invoices = false
  }

  backToAccounts = (event: any) => {
    this.showPayment = !event
    this.invoices = !event
    this.showHome = event
  }

  backToPayment = (event: any) => {
    this.invoices = !event
    this.showPayment = event
  }

  openInvoice = (event: any) => {
    this.showPayment = !event
    this.invoices = event
  }

  openPayment = (event: any) => {
    this.showPayment = event;
    this.showHome = !event
  }

  openHome = () => {
    this.showHome = true;
    this.showPayment = false;
    this.showBankCard = false;
    this.invoices = false
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

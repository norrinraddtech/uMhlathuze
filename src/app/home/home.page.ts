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

  closeAll = (event: boolean) => {
    this.invoices = event
    this.showHome = event
    this.showAddCard = event
    this.showBankCard = event
    this.showPayment = event
    this.showInvoicePDF = event
  }

  openAddCard = () => {
    this.closeAll(false)
    this.showAddCard = true
  }

  openBankCard = () => {
    this.closeAll(false)
    this.showBankCard = true
    // this.showHome = false
    // this.showPayment = false
    // this.invoices = false
  }

  backToAccounts = (event: any) => {
    // this.showPayment = !event
    // this.invoices = !event
    this.closeAll(!event)
    this.showHome = event
  }

  backToPayment = (event: any) => {
    // this.invoices = !event
    this.closeAll(!event)
    this.showPayment = event
  }

  openInvoice = (event: any) => {
    // this.showPayment = !event
    this.closeAll(!event)
    this.invoices = event
  }

  openPayment = (event: any) => {
    this.closeAll(!event)
    this.showPayment = event;
    // this.showHome = !event
  }

  openHome = () => {
    this.closeAll(false)
    this.showHome = true;
    // this.showPayment = false;
    // this.showBankCard = false;
    // this.invoices = false
  }

  close = () => {
    this.closeAll(false)
    this.invoices = true;
    // this.showHome = false;
    // this.showInvoicePDF = false;
  }

  openPDF = () => {
    // this.invoices = false;
    this.closeAll(false)
    this.showInvoicePDF = true;
  }


}

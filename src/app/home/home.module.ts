import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AccountsModule } from '../shared-modules/accounts.module';
import { InvoicesModule } from '../shared-modules/invoices.module';
import { DisplayInvoiceModule } from '../shared-modules/display-invoice.module';
import { PaymentModule } from '../shared-modules/payment.module';
import { BankCardModule } from '../shared-modules/bank-card.module';
import { AddCardModule } from '../shared-modules/add-card.module';
import { ProcessPaymentModule } from '../shared-modules/process-payment.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AccountsModule,
    InvoicesModule,
    DisplayInvoiceModule,
    PaymentModule,
    BankCardModule,
    AddCardModule,
    ProcessPaymentModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AccountsModule } from '../shared-modules/accounts.module';
import { InvoicesModule } from '../shared-modules/invoices.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AccountsModule,
    InvoicesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from '../components/accounts/accounts.component';



@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [AccountsComponent]
})
export class AccountsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCardComponent } from '../components/bank-card/bank-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BankCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [BankCardComponent]
})
export class BankCardModule { }

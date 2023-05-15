import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from '../components/payment/payment.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }

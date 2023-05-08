import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProcessPaymentComponent } from '../components/process-payment/process-payment.component';



@NgModule({
  declarations: [ProcessPaymentComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ProcessPaymentComponent]
})
export class ProcessPaymentModule { }

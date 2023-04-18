import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InvoiceComponent } from '../components/invoice/invoice.component';



@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [InvoiceComponent]
})
export class InvoicesModule { }

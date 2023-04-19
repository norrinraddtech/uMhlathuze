import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayInvoiceComponent } from '../components/display-invoice/display-invoice.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer'



@NgModule({
  declarations: [DisplayInvoiceComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PdfViewerModule
  ],
  exports: [DisplayInvoiceComponent]
})
export class DisplayInvoiceModule { }

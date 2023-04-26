import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCardComponent } from '../components/add-card/add-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AddCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AddCardComponent]
})
export class AddCardModule { }

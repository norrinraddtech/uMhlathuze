import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ViewProfileComponent } from 'src/app/components/view-profile/view-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ViewProfileComponent]
})
export class ViewProfileModule { }

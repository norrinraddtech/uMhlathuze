import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [EditProfileComponent]
})
export class EditProfileModule { }

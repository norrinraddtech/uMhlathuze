import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { EditProfileModule } from '../modules/edit-profile/edit-profile.module';
import { ViewProfileModule } from '../modules/view-profile/view-profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    EditProfileModule,
    ViewProfileModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

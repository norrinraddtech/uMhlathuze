import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyViewPage } from './property-view.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyViewPageRoutingModule {}

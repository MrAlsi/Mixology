import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PossoFarePage } from './posso-fare.page';

const routes: Routes = [
  {
    path: '',
    component: PossoFarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PossoFarePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiocoPage } from './gioco.page';

const routes: Routes = [
  {
    path: '',
    component: GiocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiocoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchermataDrinkGiocoPage } from './schermata-drink-gioco.page';

const routes: Routes = [
  {
    path: '',
    component: SchermataDrinkGiocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchermataDrinkGiocoPageRoutingModule {}

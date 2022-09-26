import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'gioco',
        loadChildren: () => import('../gioco/gioco.module').then(m => m.GiocoPageModule)
      },
      {
        path: 'ordina-drink',
        loadChildren: () => import('../ordina-drink/ordina-drink.module').then(m => m.OrdinaDrinkPageModule)
      },
      {
        path: 'posso-fare',
        loadChildren: () => import('../posso-fare/posso-fare.module').then(m => m.PossoFarePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/ordina-drink',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ordina-drink',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

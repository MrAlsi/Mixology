import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'gioco',
    loadChildren: () => import('./gioco/gioco.module').then( m => m.GiocoPageModule)
  },
  {
    path: 'ordina-drink',
    loadChildren: () => import('./ordina-drink/ordina-drink.module').then( m => m.OrdinaDrinkPageModule)
  },
  {
    path: 'posso-fare',
    loadChildren: () => import('./posso-fare/posso-fare.module').then( m => m.PossoFarePageModule)
  },
  {
    path: 'schermata-drink-gioco',
    loadChildren: () => import('./schermata-drink-gioco/schermata-drink-gioco.module').then( m => m.SchermataDrinkGiocoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

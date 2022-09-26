import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdinaDrinkPageRoutingModule } from './ordina-drink-routing.module';

import { OrdinaDrinkPage } from './ordina-drink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdinaDrinkPageRoutingModule
  ],
  declarations: [OrdinaDrinkPage]
})
export class OrdinaDrinkPageModule {}

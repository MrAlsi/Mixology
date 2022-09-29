import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchermataDrinkGiocoPageRoutingModule } from './schermata-drink-gioco-routing.module';

import { SchermataDrinkGiocoPage } from './schermata-drink-gioco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchermataDrinkGiocoPageRoutingModule
  ],
  declarations: [SchermataDrinkGiocoPage]
})
export class SchermataDrinkGiocoPageModule {}

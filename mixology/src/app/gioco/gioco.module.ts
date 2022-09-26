import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiocoPageRoutingModule } from './gioco-routing.module';

import { GiocoPage } from './gioco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiocoPageRoutingModule
  ],
  declarations: [GiocoPage]
})
export class GiocoPageModule {}

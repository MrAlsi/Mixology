import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PossoFarePageRoutingModule } from './posso-fare-routing.module';

import { PossoFarePage } from './posso-fare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PossoFarePageRoutingModule
  ],
  declarations: [PossoFarePage]
})
export class PossoFarePageModule {}

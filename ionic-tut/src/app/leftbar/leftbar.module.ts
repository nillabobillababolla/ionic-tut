import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeftbarPageRoutingModule } from './leftbar-routing.module';

import { LeftbarPage } from './leftbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeftbarPageRoutingModule
  ],
  declarations: [LeftbarPage]
})
export class LeftbarPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftbarPage } from './leftbar.page';

const routes: Routes = [
  {
    path: '',
    component: LeftbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeftbarPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductOverviewPage } from './product-overview.page';

const routes: Routes = [
  {
    path: '',
    component: ProductOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductOverviewPageRoutingModule {}

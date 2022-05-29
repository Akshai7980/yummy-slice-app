import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductOverviewPageRoutingModule } from './product-overview-routing.module';

import { ProductOverviewPage } from './product-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductOverviewPageRoutingModule
  ],
  declarations: [ProductOverviewPage]
})
export class ProductOverviewPageModule {}

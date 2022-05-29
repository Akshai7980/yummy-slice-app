import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageSlidePageRoutingModule } from './image-slide-routing.module';

import { ImageSlidePage } from './image-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageSlidePageRoutingModule
  ],
  declarations: [ImageSlidePage]
})
export class ImageSlidePageModule {}

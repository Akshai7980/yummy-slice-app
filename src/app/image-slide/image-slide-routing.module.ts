import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageSlidePage } from './image-slide.page';

const routes: Routes = [
  {
    path: '',
    component: ImageSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageSlidePageRoutingModule {}

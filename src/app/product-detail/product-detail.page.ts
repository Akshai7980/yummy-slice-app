/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControllerService } from '../service/controller.service';
import { CrudService } from '../service/crud.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productDetails: any = [];
  userDetails: any = [];
  constructor(
    private control: ControllerService,
    public storage: StorageService,
    private crud: CrudService,
  ) {
    this.control.route.queryParams.subscribe(params => {
      if (this.control.router.getCurrentNavigation().extras.state) {
        this.productDetails = this.control.router.getCurrentNavigation().extras.state.product;
        console.log('productDetails:',this.productDetails);
      }
    });
   }

  ngOnInit() {
  this.getUserDetails();
  }

  getUserDetails() {
    this.storage.storage.get('USER_DETAILS').then((val) => {
      console.log('val:',val);
      this.userDetails = val;
      console.log('userDetails:',this.userDetails);
    });
  }

  addItemToCart() {
    const cartitem = {
      id: this.productDetails?.id,
      name: this.productDetails?.product,
      price: this.productDetails?.rate,
      image: this.productDetails?.image,
      count: 1,
      quantity: this.productDetails?.quantity,
      created_at: Date.now(),
      userid: this.userDetails?.uid
    };
    console.log('cartitem:',cartitem);
    this.crud.ngFirestore.collection('userCart').add(cartitem).then((res: any) => {
      console.log('Add To Cart Res:',res);
    });
  }

}

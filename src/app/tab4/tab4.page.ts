import { Component, OnInit} from '@angular/core';
import { ApiService } from '../service/api.service';
import { ControllerService } from '../service/controller.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  cartItems: any = [];
  count: any;
  userDetails: any = [];

  constructor(
    public storage: StorageService,
    private control: ControllerService,
    private api: ApiService
  ) {
    this.count = 0;
  }

  ngOnInit(): void {
    this.getCart();
  }

  ionViewWillEnter(){
    this.cartItems = [
      {
        name: 'Leg piece',
        quantity: '5 Kg',
        stoke_status : 'In stoke',
        seen_status: '1',
        product_count: 0,
        rate: 99
      },
      {
        name: 'Leg piece',
        quantity: '5 Kg',
        stoke_status : 'In stoke',
        seen_status: '1',
        product_count: 0,
        rate: 'Rs: 99'
      },
      {
        name: 'Leg piece',
        quantity: '5 Kg',
        stoke_status : 'In stoke',
        seen_status: '1',
        product_count: 0,
        rate: 'Rs: 99'
      },
      {
        name: 'Leg piece',
        quantity: '5 Kg',
        stoke_status : 'In stoke',
        seen_status: '1',
        product_count: 0,
        rate: 'Rs: 99'
      },
      {
        name: 'Leg piece',
        quantity: '5 Kg',
        stoke_status : 'In stoke',
        seen_status: '1',
        product_count: 0,
        rate: 'Rs: 99'
      },
      {
        name: 'Leg piece',
        quantity: '5 Kg',
        stoke_status : 'In stoke',
        seen_status: '1',
        product_count: 0,
        rate: 'Rs: 99'
      },
    ];
    this.getUserDetails();
  }

  getUserDetails() {
    this.storage.storage.get('USER_DETAILS').then((val) => {
      console.log('val:',val);
      this.userDetails = val;
      console.log('userDetails:',this.userDetails);
    });
  }

  getCart() {
    const params = {
      uuid: ''
    }
    this.api.postMethod('user/get/all/carts',params).then((res: any) => {
      console.log('res:',res);
    })
    .catch((err) => {
      console.log('err:',err);
    });
  }


  deleteProduct(c,i) {
    console.log(c,i);
  }

  toIncrement(c,i) {
    console.log(c,i);
    if (this.cartItems[i].product_count === 0) {
      this.cartItems[i].product_count = 1;
      console.log('count1',this.cartItems[i].product_count);
    } else {
      if (this.cartItems[i].product_count >= 5) {
        console.log('You have reached the maximum product quantity');
      } else {
        this.cartItems[i].product_count += 1;
        this.cartItems[i].rate  = this.cartItems[i].rate * this.cartItems[i].product_count;
        console.log('count2',this.cartItems[i].product_count);
      }
    }
  }

  toDecrement(c, i: number) {
    console.log(c,i);
    if (this.cartItems[i].product_count === 0) {
      console.log('You have reached the minimum product quantity');
      // this.cartItems[i].product_count = 0;
      // console.log('count1',this.cartItems[i].product_count);
    } else {
      this.cartItems[i].product_count -= 1;
      this.cartItems[i].rate  = this.cartItems[i].rate % this.cartItems[i].product_count;
      console.log('count2',this.cartItems[i].product_count);
    }
  }
}

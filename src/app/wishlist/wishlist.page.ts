/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ControllerService } from '../service/controller.service';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  userid: any;
  userWishList: any = [];
  allWishList: any = [];
  skeleton: { skeleton: string}[];

  constructor(
    private control: ControllerService,
    private crud: CrudService,
    private api: ApiService
  ) {
    this.control.route.queryParams.subscribe(params => {
      if (this.control.router.getCurrentNavigation().extras.state) {
        this.userid = this.control.router.getCurrentNavigation().extras.state.userId;
        console.log('userid:',this.userid);
      }
    });
  }

  ngOnInit() {
    this.allWishList = [];
    this.userWishList = [];
    this.getAllWishList();
    this.getWishList();
  }

  getWishList() {
    const params = {
      uuid: ''
    }
    this.api.postMethod('user/get/order/details',params).then((res: any) => {
      console.log('res:',res);
    })
    .catch((err) => {
      console.log('err:',err);
    });
  }

  ionViewWillEnter() {
    this.skeleton =[ { skeleton: '', },{ skeleton: '', }, { skeleton: '', } ];
  }

  getAllWishList() {
    this.crud.ngFirestore.collection('userWishList').snapshotChanges().subscribe((res: any) => {
      this.allWishList = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data()
        };
      });
      this.filterWishList();
    },err => {
      console.log('Error',err);
    });
  }

  filterWishList() {
    for( let i = 0; i <= this.allWishList?.length; i++) {
      if (this.allWishList[i]?.userid === this.userid) {
        this.userWishList.push(this.allWishList[i]);
      } else {
        console.log('No wishlist');
      }
    };
    console.log('userWishList:',this.userWishList);
  }

  toDeleteItem(u, i) {
    console.log('w:',u,i);
    const id = u.id;
    this.crud.ngFirestore.collection('userWishList').doc(id).delete();
  }

}




/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { ControllerService } from '../service/controller.service';
import { NavigationExtras } from '@angular/router';
import { StorageService } from '../service/storage.service';

// const swiper = new Swiper(...);
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


   slideOpts = {
    // effect: 'flip',
    // initialSlide: 1,
    // speed: 500,
    // autoplay: {
    //   delay: 2000
    // },
    slidePreView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true
  };

  productDetails: any = [];
  userId: any;
  category: any = [];
  products: any = [];
  deals: any = [];
  blurBg: any[][];
  isUserEnteredIntoHome: Boolean;

  constructor(
    private crud: CrudService,
    private control: ControllerService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.isUserEnteredIntoHome = true;
    this.getCurrentUser();
    this.category.length = 1;
    this.products.length = 4;
    this.deals.length = 4;
    this.blurBg = [
      ["../../assets/image/blur1.jpeg"],
      ["../../assets/image/blur2.jpeg"],
      ["../../assets/image/blur3.jpeg"],
    ];
  }

  getCurrentUser() {
    this.control.fireauth.onAuthStateChanged((user: any) => {
      if (user != null) {
        this.userId = user.uid;
      } else {
        console.log('Get User Details Res:');
      }
    });
  }

  ionViewWillEnter(){
    this.productDetails = [
      {
        id : 1,
        product : 'Leg Piece',
        image: '../../assets/image/Sampleimages/img1.jpeg',
        rate : '150',
        offer : '200',
        offer_perc: '15%',
        quantity : '500g',
        description : 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
      },
      {
        id : 2,
        product : 'Leg Piece',
        image: '../../assets/image/Sampleimages/img1.jpeg',
        rate : '150',
        offer : '200',
        offer_perc: '15%',
        quantity : '500g',
        description : 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
      },
      {
        id : 3,
        product : 'Leg Piece',
        image: '../../assets/image/Sampleimages/img1.jpeg',
        rate : '150',
        offer : '200',
        offer_perc: '15%',
        quantity : '500g',
        description : 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
      },
      {
        id : 4,
        product : 'Leg Piece',
        image: '../../assets/image/Sampleimages/img1.jpeg',
        rate : '150',
        offer : '200',
        offer_perc: '15%',
        quantity : '500g',
        description : 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
      },
      {
        id : 5,
        product : 'Leg Piece',
        image: '../../assets/image/Sampleimages/img1.jpeg',
        rate : '150',
        offer : '200',
        offer_perc: '15%',
        quantity : '500g',
        description : 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
      },
    ];

    this.storage.setStorage('isUserEnteredIntoHome', this.isUserEnteredIntoHome);
  }

  gotoPage(p) {
    const navigationExtras: NavigationExtras = {
      state: {
        product: p
      }
    };
    this.control.router.navigate(['product-detail'], navigationExtras);
  }

  addToCart(p, i) {
    console.log('P:',p);
    const params = {
      userid: this.userId,
      created_at: Date.now(),
      product: p.product,
      rate: p.rate,
      quantity: p.quantity,
      product_offer: p.offer,
      wished_status: '1',
      product_rating: '',
      product_id: i,
    };
    const cRef = this.crud.ngFirestore.collection('userCart');
    
    cRef.ref
    .where('userid', '==', this.userId)
    .where('product_id', '==' ,i)
    .get()
    .then(querySnapshot => {
      
      console.log('length:',querySnapshot.docs.length);
      if (querySnapshot.docs.length == null) {
        console.log('Itz null');
      }
       if (querySnapshot.docs.length > 0) {
        console.log('entry found');
      }
       if (!querySnapshot.docs.length) {
        console.log('no entry');
        this.sendCartLogs(params);
      }

      querySnapshot
      .forEach(doc => {
        console.log(doc.id, '=>' , doc.data());
      });
    })

    .catch ((err) => {
      console.log('e:',err);
    });

  }

  sendCartLogs(params) {
    return this.crud.ngFirestore.collection('userCart').add(params).then((res: any) => {
      console.log('Add To Cart Res:',res);
    });
  }

  buyNow(p) {
    console.log('P:',p);
    p.uid = this.userId;
    p.createdAt = Date.now();
    return this.crud.ngFirestore.collection('userBuyNowList').add(p).then((res: any) => {
      console.log('Buy Now Res:',res);
    });
  }

  addToWishlist(p, i) {
    console.log('P:',p);
    const params = {
      userid: this.userId,
      created_at: Date.now(),
      product: p.product,
      rate: p.rate,
      quantity: p.quantity,
      product_offer: p.offer,
      wished_status: '1',
      product_rating: '',
      product_id: i,
    };
    console.log('params:',params);

    const cRef = this.crud.ngFirestore.collection('userWishList');
    
    cRef.ref
    .where('userid', '==', this.userId)
    .where('product_id', '==' ,i)
    .get()
    .then(querySnapshot => {

      console.log('length:',querySnapshot.docs.length);
      if (querySnapshot.docs.length == null) {
        console.log('Itz null');
      }
       if (querySnapshot.docs.length > 0) {
        console.log('entry found');
      }
       if (!querySnapshot.docs.length) {
        console.log('no entry');
        this.sendWishListLog(params);
      }

      querySnapshot
      .forEach(doc => {
        console.log(doc.id, '=>' , doc.data());
      });
    })

    .catch ((err) => {
      console.log('e:',err);
    });

  }

  sendWishListLog(params) {
        return this.crud.ngFirestore.collection('userWishList').add(params).then((res: any) => {
      console.log('Product Successfully Added To Wishlist:',res);
    }).catch((err) => {
      console.log('e:',err);
    });
  }

}

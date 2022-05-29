/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable arrow-body-style */
/* eslint-disable no-var */
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../service/controller.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  allCart: any = [];

  constructor(
    private control: ControllerService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
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

}

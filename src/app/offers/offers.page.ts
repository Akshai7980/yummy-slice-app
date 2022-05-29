import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ControllerService } from '../service/controller.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(
    private control: ControllerService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.api.getMethod('offer/all/notifications').then((res: any) => {
      console.log('res:',res);
    })
    .catch((err) => {
      console.log('err:',err);
    });
  }

}

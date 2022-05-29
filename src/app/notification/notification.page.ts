/* eslint-disable arrow-body-style */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ControllerService } from '../service/controller.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notificationDetails: any = [];

  constructor(
    private control: ControllerService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.notificationDetails = [
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '0',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '0',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
    ];
    this.getNotification();
  }

  getNotification() {
    this.api.getMethod('offer/all/notifications').then((res: any) => {
      console.log('res:',res);
    })
    .catch((err) => {
      console.log('err:',err);
    });
  }


  getNotch(n) {
    console.log('n',n);
  }

}

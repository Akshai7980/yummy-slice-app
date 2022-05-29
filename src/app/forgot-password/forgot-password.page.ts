import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ControllerService } from '../service/controller.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  userDetails: any = [];

  constructor(
    private control: ControllerService,
    private api: ApiService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.storage.storage.get("USER_DETAILS").then((val) => {
      if (val) {
        this.userDetails = val;
        console.log("userDetails:", this.userDetails);
      }
    });
  }

  forgot() {
    this.api.postMethod('/user/forgotpassword', this.userDetails?.email).then((res: any) => {
      console.log('res:',res);
    })
    .catch((err) =>{
      console.log('err:',err);
    });
  }

}

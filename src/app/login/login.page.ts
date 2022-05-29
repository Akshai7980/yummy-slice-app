/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../service/controller.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../service/storage.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isChecked: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private control: ControllerService,
    private storage: StorageService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.minLength(12)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
    this.fetchCheckedUserDetails();
    this.control.menu.swipeGesture(false);
    this.control.modalController.dismiss();
  }

  onMyBooleanChange(){
    console.log('isChecked:',this.isChecked);
    if (this.loginForm.valid) {
      if(this.isChecked) {
        const msg = 'Your Email and Password is stored in device successfully.';
        const time = 2000;
        this.storage.setStorage('USER_DETAILS_CHECKED',this.loginForm.valid).catch((err) => {
          console.log('Error',err);
        });
        console.log('User Email and Password securely stored in device');
        this.control.presentToast(msg, time);
      }
    } else {
      const msg = 'Please enter valid details and then click checkbox';
      const time = 2000;
      this.control.presentToast(msg, time);
    }
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Details:',this.loginForm.value);
      this.api.postMethod('signin', this.loginForm.value).then((res: any) => {
        console.log('Res:',res);
        if (res.status === 'SUCCESS') {
          // this.storage.setStorage('USER_DEVICE_DETAILS',res.findDevice);
          console.log('SUCCESS');
        } else {
          const head = 'Failed!';
          const msg = res.message;
          this.control.presentAlert(head, msg);
        }
      }, err => {
        console.log('err:',err);
      })
      .catch((err) => {
        console.log('err:',err);
      })
    }
  }

    fetchCheckedUserDetails() {
      this.storage.storage.get('USER_DETAILS_CHECKED').then((val) => {
        console.log('Value:',val);
        if(!val) {
          console.log('No User Details Stored');
        } else {
          const msg = 'We found your stored Email and Password, would you like to continue with that';
          const time = 2000;
          this.control.presentToast(msg, time);
        }
      }).catch((err) => {
        console.log('Error:',err);
      });
    }

}

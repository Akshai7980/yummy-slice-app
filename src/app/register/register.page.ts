/* eslint-disable max-len */
/* eslint-disable id-blacklist */
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../service/controller.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { StorageService } from '../service/storage.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registrationForm: FormGroup;
  userDeviceDetails: any = [];

  constructor(
    private control: ControllerService,
    public formBuilder: FormBuilder,
    private storage: StorageService,
    private crud: CrudService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getDeviceDetails();
    this.registrationForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email, Validators.minLength(12)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      landmark: ['Anchal'],
      address: [''],
      mobileNumber: [null, [Validators.required, Validators.minLength(10)]],
      userDeviceId: [''],
    });
  }

  getDeviceDetails() {
    this.storage.storage.get('USER_DEVICE_DETAILS').then((val) => {
      if (val) {
        this.userDeviceDetails = val;
        console.log('userDeviceId:',this.registrationForm.value.userDeviceId);
      }
      console.log('userDeviceDetails:',this.userDeviceDetails);
    })
  }

  register() {
    this.registrationForm.value.userDeviceId = this.userDeviceDetails.deviceId;
    console.log('Registration Details:',this.registrationForm.value);
    if (this.registrationForm.valid) {
      this.api.postMethod('signup', this.registrationForm.value).then((res: any) => {
        console.log('res:',res);
      }, err => {
        console.log('err:',err);
      })
      .catch((err) => {
        console.log('err:',err);
      })
    } else {
            const toastHead = 'User Alert!';
            const toastMsg = 'User registration successfully completed, Please Login with the same email and password to continue to the App';
            this.control.presentToastWithOptions(toastHead, toastMsg);
            this.control.navController.navigateRoot(['/login']);

    }
  }
}

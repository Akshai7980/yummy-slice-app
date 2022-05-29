/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/quotes */
import { ControllerService } from './../service/controller.service';
import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { CrudService } from '../service/crud.service';
import { ApiService } from '../service/api.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.page.html',
  styleUrls: ['./image-slide.page.scss'],
})
export class ImageSlidePage implements OnInit {

  // deviceDetails = {
  //   uuid : '',
  //   cordova : '',
  //   isVirtual : '',
  //   manufacturer : '',
  //   model : '',
  //   platform : '',
  //   serial : '',
  //   version : '',
  //   time : Date.now(),
  // };

  // webDetails = {
  //   uuid : 'cd347902-d2b3-11eb-b8bc-0242ac130003',
  //   cordova : '',
  //   isVirtual : '',
  //   manufacturer : '',
  //   model : '',
  //   platform : 'web',
  //   serial : '',
  //   version : '',
  //   time : Date.now(),
  // };

  constructor(
    private device: Device,
    private control: ControllerService,
    private crud: CrudService,
    private api: ApiService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.fetchUserDeviceDetails();
    // console.log('Device UUID is: ' + this.device.uuid);
    // console.log('Device cordova is: ' + this.device.cordova);
    // console.log('Device isVirtual is: ' + this.device.isVirtual);
    // console.log('Device manufacturer is: ' + this.device.manufacturer);
    // console.log('Device model is: ' + this.device.model);
    // console.log('Device platform is: ' + this.device.platform);
    // console.log('Device serial is: ' + this.device.serial);
    // console.log('Device version is: ' + this.device.version);
  }

  fetchUserDeviceDetails() {
    if (this.control.platform.is("capacitor")) {
      console.log('This is a device view');
      const params = {
        deviceName: this.device.model,
        deviceId: this.device.uuid,
        login: false
      };
      console.log('params:',params);
      this.api.postMethod('user/deviceRegistering', params).then((res: any) => {
        console.log('res:',res);
        if (res.status === 'SUCCESS') {
          this.storage.setStorage('USER_DEVICE_DETAILS',res.findDevice);
          console.log('securely stored in device');
        } else {
          this.storage.setStorage('USER_DEVICE_DETAILS',res.findDevice);
          console.log('status failed');
        }
      }, err => {
        console.log('err:',err);
      })
      .catch((err) => {
        console.log('err:',err);
      });

    } else {
      console.log('This is a web view');
      const params = {
        deviceName: 'Chrome Web Browser',
        deviceId: 'DEF123GHIJ',
        login: false
      };
      console.log('params:',params);
      this.api.postMethod('user/deviceRegistering', params).then((res: any) => {
        console.log('res:',res);
        if (res.status === 'SUCCESS') {
          this.storage.setStorage('USER_DEVICE_DETAILS',res.findDevice);
          console.log('securely stored in device');
        } else {
          this.storage.setStorage('USER_DEVICE_DETAILS',res.findDevice);
          console.log('status failed');
        }
      }, err => {
        console.log('err:',err);
      })
      .catch((err) => {
        console.log('err:',err);
      });
    }
  }

  // userDeviceDetails() {
  //   if (this.control.platform.is("capacitor"||"cordova")) {

  //     this.deviceDetails.uuid = this.device.uuid;
  //     this.deviceDetails.cordova = this.device.cordova;
  //     // this.deviceDetails.isVirtual = this.device.isVirtual;
  //     this.deviceDetails.manufacturer = this.device.manufacturer;
  //     this.deviceDetails.model = this.device.model;
  //     this.deviceDetails.platform = this.device.platform;
  //     this.deviceDetails.serial = this.device.serial;
  //     this.deviceDetails.version = this.device.version;
  //     // this.deviceDetails.time = this.device.version;

  //     // this.deviceDetails = {
  //     //   uuid : this.device.uuid,
  //     //   cordova : this.device.cordova,
  //     //   isVirtual : '',
  //     //   manufacturer : this.device.manufacturer,
  //     //   model : this.device.model,
  //     //   platform : this.device.platform,
  //     //   serial : this.device.serial,
  //     //   version : this.device.version,
  //     //   time : Date.now(),
  //     // };

  //     console.log('This is a mobile view');
  //     this.crud.userDeviceDetails(this.deviceDetails)
  //     .then(() => {
  //     }).catch((err) => {
  //       console.log(err);
  //     });

  //   } else {

  //     console.log('This is a web view');
  //     this.crud.userDeviceDetails(this.webDetails)
  //     .then(() => {
  //     }).catch((err) => {
  //       console.log(err);
  //     });

  //   };

  // }

}

/* eslint-disable id-blacklist */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export class USERS {
  $key: string;
  username: string;
  email: string;
  password: string;
  number: string;
  district: string;
  city: string;
  phone: string;
  time: string;
  error: string;
}

export class DEVICE {
  // $key: string;
  uuid: string;
  cordova: string;
  isVirtual: string;
  manufacturer: string;
  model: string;
  platform: string;
  serial: string;
  version: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    public ngFirestore: AngularFirestore,
  ) { }

  createUser(user: USERS) {
    return this.ngFirestore.collection('registration').add(user);
  }

  userDeviceDetails(device: DEVICE) {
    return this.ngFirestore.collection('deviceDetails').add(device);
  }
}

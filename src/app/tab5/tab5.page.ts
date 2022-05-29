/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../service/controller.service';
import { StorageService } from '../service/storage.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit{

  isFileUploading: boolean;
  isFileUploaded: boolean;

  // collectionName: string;
  // loggedIn: boolean;
  // user_displayName: any;
  userDetails: any = [];

  constructor(
    private control: ControllerService,
    private storage: StorageService,
  ) {}

  ngOnInit() {}

  getUserDetails2() {
    this.storage.storage.get('USER_DETAILS').then((val) => {
      this.userDetails = val;
    });
  }

  ionViewWillEnter(){
    this.getUserDetails2();
  }

  gotoPage() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.userDetails
      }
    };
    this.control.router.navigate(['edit-profile'], navigationExtras);
   }

  // getCurrentUserWithEmail() {
  //   // var cRef =  this.crud.ngFirestore.collection('registration');
  //   // cRef.ref.where('email', '==', user.email);
  // }

  // getCurrentUser() {
  //   this.control.fireauth.onAuthStateChanged((user: any) => {
  //     if (user != null) {
  //       this.loggedIn = true;
  //       this.user_displayName = user.displayName;
  //       console.log('user_displayName:',this.user_displayName, user);
  //     } else {
  //       console.log('Get User Details Res:');
  //     }
  //     var cRef =  this.crud.ngFirestore.collection('registration').doc().get();
  //     // cRef.ref.where(user.email, '==', 'Freddy123@gmail.com');
  //     console.log('Res:',cRef);
  //     // console.log('Res:',cRef);
  //   });
  // }

  // GetUserDetails() {
  //   return this.crud.ngFirestore.collection('registration').snapshotChanges().subscribe((res: any) => {
  //     console.log(' Get User Details Res:',res);
  //     this.profileDetails = res.map((t) => {
  //       return {
  //         id: t.payload.doc.id,
  //         ...t.payload.doc.data()
  //       };
  //     });
  //     console.log('profileDetails:',this.profileDetails);
  //   },err => {
  //     console.log('Error',err);
  //   });
  // }

  // read_students() {
  //   return this.crud.ngFirestore.collection(this.collectionName).snapshotChanges();
  // }

  // update_student(recordID, record) {
  //   this.crud.ngFirestore.doc(this.collectionName + '/' + recordID).update(record);
  // }

  // delete_student(record_id) {
  //   this.crud.ngFirestore.doc(this.collectionName + '/' + record_id).delete();
  // }

}

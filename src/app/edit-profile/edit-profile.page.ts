import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StorageService } from '../service/storage.service';
import { ControllerService } from '../service/controller.service';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  editProfileForm: FormGroup;
  userDetails: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private storage: StorageService,
    private control: ControllerService,
    private crud: CrudService,
  ) {
    // this.control.route.queryParams.subscribe(params => {
    //   if (this.control.router.getCurrentNavigation().extras.state) {
    //     this.userDetails = this.control.router.getCurrentNavigation().extras.state.user;
    //     console.log('userDetails:',this.userDetails);
    //   }
    // });
   }

  ngOnInit() {
    this.editProfileForm = this.formBuilder.group({
      uid: [this.userDetails?.uid],
      username: [''],
      email: [''],
      password: [''],
      district: ['Kollam'],
      city: ['Anchal'],
      code: ['+91'],
      alternate: [''],
      phone: [''],
      address: [''],
      landmark: [''],
      pincode: ['691306'],
      signUp: [''],
      signIn: [''],
      profileUpdate: [Date.now()]
    });
  }

  ionViewWillEnter(){
   this.getUserDetails();
  }

  getUserDetails() {
    this.storage.storage.get('USER_DETAILS').then((val) => {
      console.log('val:',val);
      this.userDetails = val;
    }).catch((err) => {
      console.log('Error',err);
    });
  }

  updateProfile() {
    console.log('Registration Details:',this.editProfileForm.value);
    this.storage.setStorage('USER_DETAILS',this.editProfileForm.value).then((res: any) => {
      console.log('Edit Profile Form Details:',res);
    }).catch((err) => {
      console.log('Error:',err);
    });
  }

}

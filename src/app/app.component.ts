/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ControllerService } from './service/controller.service';
import { Platform , NavController, ModalController } from '@ionic/angular';
import { StorageService } from './service/storage.service';
import { RegistrationPromptPage } from './_modal/registration-prompt/registration-prompt.page';
import { LogoutPage } from './_modal/logout/logout.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tab3',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/tabs/tab5',
      icon: 'person-circle'
    },
    {
      title: 'Cart',
      url: '/tabs/tab4',
      icon: 'cart'
    },
    {
      title: 'Wishlist',
      url: '/wishlist',
      icon: 'heart'
    },
    {
      title: 'Orders',
      url: '/tabs/tab2',
      icon: 'reader'
    },
    {
      title: 'Offers',
      url: '/offers',
      icon: 'ticket'
    },
    {
      title: 'Product Overview',
      url: '/product-overview',
      icon: 'bag-handle'
    },
    {
      title: 'Contact Us',
      url: '/tabs/tab1',
      icon: 'call'
    },
    {
      title: 'Notification',
      url: '/notification',
      icon: 'notifications'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'log-out'
    },
  ];
  isLogin: boolean;

  constructor(
    public control: ControllerService,
    private plt: Platform,
    private navCtrl: NavController,
    private StorageService: StorageService,
    private modalController: ModalController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.plt.ready().then(() => {
      this.checkUserDetails();
    });
  }

  checkUserDetails() {
    this.StorageService.storage.get('USER_DEVICE_DETAILS').then((val) => {
      console.log('val:',val);
      if(val) {
        this.navCtrl.navigateRoot('/tabs/tab3');
      } else {
        this.navCtrl.navigateRoot('/landing');
      }
      if (val.login === false) {
        this.isLogin = val.login;
        // this.appPages[2] = {
        //   title: '',
        //   url: '',
        //   icon: ''
        // };
        // this.appPages[3] = {
        //   title: '',
        //   url: '',
        //   icon: ''
        // };
        // this.appPages[4] = {
        //   title: '',
        //   url: '',
        //   icon: ''
        // };
        // this.appPages[9] = {
        //   title: '',
        //   url: '',
        //   icon: ''
        // };
      }
    }).catch((err) => {
      console.log('Error:',err);
    });
  }

  openPage(i: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        userId: ''
      }
    };
    const route = this.appPages[i].url;
    if (this.appPages[i].title === 'Profile') {
      this.StorageService.storage.get('USER_DEVICE_DETAILS').then((val) => {
        console.log('val:',val);
        if(val?.login === false) {
          this.presentPromptModal();
        } else {
          this.control.router.navigate([route], navigationExtras);
        }
      }).catch((err) => {
        console.log('Error:',err);
      });
    } else {
      this.control.router.navigate([route], navigationExtras);
    }

    if (this.appPages[i].title === 'Logout') {
      this.presentLogoutModal();
    }
  }

  async presentPromptModal() {
    const modal = await this.modalController.create({
      component: RegistrationPromptPage,
      cssClass: 'prompt-modal',
    });
    return await modal.present();
  }

  async presentLogoutModal() {
    const modal = await this.modalController.create({
      component: LogoutPage,
      cssClass: 'logout-modal',
    });
    return await modal.present();
  }
}

/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { ModalController, ToastController, Platform, NavController, LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { StorageService } from './storage.service';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  userDetails: any = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public modalController: ModalController,
    public toastCtrl: ToastController,
    public fireauth: AngularFireAuth,
    public fStorage: AngularFireStorage,
    // public fUpload: AngularFireUploadTask,
    public fStore: AngularFirestore,
    // public fStoreCollect: AngularFirestoreCollection,
    public alertCtrl: AlertController,
    public loading: LoadingController,
    public navController: NavController,
    public platform: Platform,
    public route: ActivatedRoute,
    public router: Router,
    public storage: StorageService,
    public menu: MenuController
  ) {
    this.getUserDetails();
  }

  getUserDetails() {
    this.storage.storage.get('USER_DETAILS').then((val) => {
      this.userDetails = val;
    });
  }


// ----- App's Action Sheet Controller -----
    async presentActionSheet() {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Albums',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();

      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
// ----- App's Action Sheet Controller -----



// ----- App's Loader Controller -----

          async presentLoading(msg, time) {
          const loading = await this.loading.create({
            cssClass: 'my-custom-class',
            message: msg,
            duration: time
          });
          await loading.present();

          const { role, data } = await loading.onDidDismiss();
          console.log('Loading dismissed!');
        }

// ----- App's Loader Controller -----



// ----- App's Alert Controller -----
    async presentAlert(head, msg) {
      const alert = await this.alertCtrl.create({
        header: head,
        message: msg,
        buttons: ['OK']
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
// ----- App's Alert Controller -----



// ----- App's Toast Controller -----
        async presentToast(msg, time) {
          const toast = await this.toastCtrl.create({
            message: msg,
            duration: time
          });
          toast.present();
        }

        async presentToastWithOptions(head, msg) {
          const toast = await this.toastCtrl.create({
            header: head,
            message: msg,
            position: 'top',
            buttons: [
              {
                text: 'Done',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          await toast.present();

          const { role } = await toast.onDidDismiss();
          console.log('onDidDismiss resolved with role', role);
        }
// ----- App's Toast Controller -----

}

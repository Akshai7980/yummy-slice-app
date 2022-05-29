import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { ControllerService } from '../../service/controller.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private control: ControllerService, private storage: StorageService) { }

  ngOnInit() {
  }

  userClicked(decision: string) {
    if (decision === 'YES') {
      this.control.router.navigate(['/login']);
      this.storage.clearStorage();
      this.control.modalController.dismiss();
    } else {
      this.control.modalController.dismiss();
    }
  }

}

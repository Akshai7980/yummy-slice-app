import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/service/controller.service';

@Component({
  selector: 'app-registration-prompt',
  templateUrl: './registration-prompt.page.html',
  styleUrls: ['./registration-prompt.page.scss'],
})
export class RegistrationPromptPage implements OnInit {

  constructor(
    public control: ControllerService
  ) { }

  ngOnInit() {
  }

}

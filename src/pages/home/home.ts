import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  dataList: any = [
    {
      ID: '',
      cover: 'assets/imgs/img_default_cover.png',
    }
  ];

}

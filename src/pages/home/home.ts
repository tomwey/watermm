import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private app: App) {

  }

  loadData(): Promise<any> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  doRefresh(ev) {
    this.loadData()
      .then(() => {
        if (ev) {
          ev.complete();
        }
      });
  }

  openItem(item) {
    this.app.getRootNavs()[0].push('DetailPage', item);
  }

  dataList: any = [
    {
      ID: '',
      cover: 'assets/imgs/img_default_cover.png',
    }
  ];

}

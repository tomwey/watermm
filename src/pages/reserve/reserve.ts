import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the ReservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {

  constructor(public navCtrl: NavController, 
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservePage');
  }

  openContact(type) {
    this.app.getRootNavs()[0].push('ContactInfoPage', { type: type });
  }

  openWaterTicket() {
    this.app.getRootNavs()[0].push('WaterTicketPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  constructor(public navCtrl: NavController, 
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  openUserProfile() {
    this.app.getRootNavs()[0].push('UserProfilePage');
  }

  openSetting() {
    this.app.getRootNavs()[0].push('SettingPage');
  }

  openWaterTicket() {
    this.app.getRootNavs()[0].push('WaterTicketPage');
  }

  openShare() {
    this.app.getRootNavs()[0].push('SharePage');
  }

  openOrder() {
    this.app.getRootNavs()[0].push('OrderPage');
  }

}

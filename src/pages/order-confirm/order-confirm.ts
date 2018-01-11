import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {

  counter: number = 1;
  constructor(public navCtrl: NavController, 
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
  }

  openDatePicker() {

  }

  changeCounter(dt) {
    let num = this.counter + dt;
    if (num >= 1) {
      this.counter = num;
    }
  }

  openContact(type) {
    this.app.getRootNavs()[0].push('ContactInfoPage', { type: type });
  }

  confirm() {

  }

  selectPay(item) {
    this.payTypes.forEach(element => {
      element.selected = false;
    });

    item.selected = true;
  }

  payTypes: any = [
    {
      ID: 'zfb',
      name: '支付宝',
      selected: false,
    },
    {
      ID: 'wx',
      name: '微信',
      selected: false,
    },
  ];

  // time = {
  //   min: new Date(),
  //   max: (new Date().getTime() + 3 * 24 * 3600)
  // }

}

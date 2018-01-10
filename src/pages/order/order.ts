import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  filter() {
    let alert = this.alertCtrl.create();
    // alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: '全部',
      value: '0',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '近一月',
      value: '1',
    });

    alert.addInput({
      type: 'radio',
      label: '近三月',
      value: '3',
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        
      }
    });
    alert.present();
  }

  buy() {
    this.app.getRootNavs()[0].popToRoot();
    let nav = this.app.getRootNavs()[0];
    nav.getActiveChildNavs()[0].select(0);
    // this.app.getActiveChildNavs()[0].select(page.index);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, 
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  autoPlay() {
    
  }

  buy() {
    this.app.getRootNavs()[0].push('OrderConfirmPage');
  }

  item: any = {
    name: '蓝光矿泉水',
    images: [
      'assets/imgs/img_default_cover.png',
      'assets/imgs/img_default_cover.png',
      'assets/imgs/img_default_cover.png',
    ],
    price: 300.00,
    old_price: 360.00,
    body: '商品名称: 蓝光桶装水<br>品牌: 蓝光<br>规格: 18.6L<br>'
  };

}

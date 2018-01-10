import { Component } from '@angular/core';
import { IonicPage, NavController, 
  Events,
  NavParams, App, ModalController } from 'ionic-angular';

/**
 * Generated class for the ContactInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-info',
  templateUrl: 'contact-info.html',
})
export class ContactInfoPage {

  pageType: number;
  title: string = null;
  constructor(public navCtrl: NavController, 
    private app: App,
    private events: Events,
    private modalCtrl: ModalController,
    public navParams: NavParams) {
    this.pageType = this.navParams.data.type || 0;

    if (this.pageType === 1) {
      this.title = '常用地址';
    } else if (this.pageType === 2) {
      this.title = '常用联系人';
    }

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactInfoPage');
  }

  selectItem(item) {
    this.events.publish('item:select', item);
    this.app.getRootNavs()[0].pop();
  }

  add() {
    if (this.pageType === 1) {
      let modal = this.modalCtrl.create('AddAddressPage');
      modal.onDidDismiss((data) => {
        if (data) {
          this.dataList.push(data);
        }
      });

      modal.present();
      // this.app.getRootNavs()[0].push('AddAddressPage');
    } else if (this.pageType === 2) {
      let modal = this.modalCtrl.create('AddContactPage');
      modal.onDidDismiss((data) => {
        if (data) {
          this.dataList.push(data);
        }
      });
      modal.present();
      // this.app.getRootNavs()[0].push('AddContactPage');
    }
  }

  dataList: any = [

  ];

}

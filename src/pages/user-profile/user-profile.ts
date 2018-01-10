import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
  AlertController,
  App,
  Events,
  ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  address: string = '';
  contact: string = '';
  pageType: number = 0;
  constructor(public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private app: App,
    private events: Events,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');

    this.events.subscribe('item:select', (item) => {
      if (this.pageType === 1) {
        this.address = item.value1;
      } else if (this.pageType === 2) {
        this.contact = `${item.value1}（${item.value2}）`;
      }
    });
  }

  changeAvatar() {
    this.actionSheetCtrl.create({
      title: '设置图片',
      buttons: [
        {
          text: '选择本地图片',
          handler: () => {

          }
        },
        {
          text: '拍照',
          handler: () => {

          }
        },
        {
          text: '取消',
          role: 'cancel',
        }
      ]
    }).present();
  }

  changeName() {
    let prompt = this.alertCtrl.create({
      title: '姓名',
      message: "",
      inputs: [
        {
          name: 'name',
          placeholder: '请输入姓名'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  changeAddress() {
    this.pageType = 1;
    this.app.getRootNavs()[0].push('ContactInfoPage', { type: 1 });
  }

  changeContact() {
    this.pageType = 2;
    this.app.getRootNavs()[0].push('ContactInfoPage', { type: 2 });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
    private app: App, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SettingPage');
  }

  changePassword() {
    this.app.getRootNavs()[0].push('MobilePage');
  }

  clearCache() {

  }

  openFeedback() {
    this.app.getRootNavs()[0].push('FeedbackPage');
  }

  openAboutus() {
    this.app.getRootNavs()[0].push('AboutusPage');
  }

  checkVersion() {
    
  }

}

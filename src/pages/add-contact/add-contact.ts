import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {

  formData: any = {
    value1: '',
    value2: '',
  };

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ok() {
    if (this.formData.value1 && this.formData.value2) {
      this.viewCtrl.dismiss(this.formData);
    }
  }

}

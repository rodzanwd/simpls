import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-brand',
  templateUrl: 'brand.html',
})
export class BrandPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {}

  public goBack() {
    this.navCtrl.pop();
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-marca',
  templateUrl: 'marca.html',
})
export class MarcaPage {

  public brands;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.brands = this.navParams.get('data');
    console.log(this.brands);
  }

  ionViewDidLoad() {}

  public goBack() {
    this.navCtrl.pop();
  }

}

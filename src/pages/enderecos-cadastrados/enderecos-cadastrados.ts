import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-enderecos-cadastrados',
  templateUrl: 'enderecos-cadastrados.html',
})
export class EnderecosCadastradosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

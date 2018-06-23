import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html',
})
export class NotificacoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  public goBack() {
    this.navCtrl.pop();
  }

}

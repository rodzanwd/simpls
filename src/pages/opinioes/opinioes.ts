import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { BrandpagesPage } from '../brandpages/brandpages';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-opinioes',
  templateUrl: 'opinioes.html',
})
export class OpinioesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  public navHome() {
    this.navCtrl.setRoot(HomePage);
  }

  public navBrand() {
    this.navCtrl.setRoot(BrandpagesPage);
  }

  public navCarrinho() {
    this.navCtrl.setRoot(CarrinhoPage);
  }

  public navOpinioes() {
    this.navCtrl.setRoot(OpinioesPage);
  }

  public navPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

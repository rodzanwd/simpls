import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { CarrinhoPage } from '../carrinho/carrinho';
import { OpinioesPage } from '../opinioes/opinioes';
import { BrandpagesPage } from '../brandpages/brandpages';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  public events;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _data: DataProvider,
    private storage: Storage
  ) {
  }

  public getEvents() {
    this.storage.get('token').then( (token) => {
      
      this._data.get(token, 'events')
        .then(resposta => {
          this.events = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  ionViewDidLoad() { this.getEvents(); }

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

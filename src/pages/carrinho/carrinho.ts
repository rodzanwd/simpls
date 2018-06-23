import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  public produtos;
  public isTrue: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public _data: DataProvider
  ) { 
    this.getProdutosNoCarrinhho();
  }

  // método lista produtos do carrinho
  public getProdutosNoCarrinhho() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'users/carrinho')
        .then(resposta => {
          this.produtos = resposta;
          //this.produtos = this.produtos.carrinho
          console.log(this.produtos);
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  public carrinho() {
    this.isTrue = true;
  }

  public lista() {
    this.isTrue = false;
  }

  ionViewDidLoad() {}

  public goBack() {
    this.navCtrl.pop();
  }

}

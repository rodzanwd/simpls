import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CarrinhoPage } from '../carrinho/carrinho';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  // variaveis
  public produto;
  public produtos;
  public precoDe: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private _data: DataProvider
  ) {
    this.produto = this.navParams.get('data');
    console.log(this.produto);

    //chama o get produtos
    this.getProduts();
  }

  // método adiciona carrinho
  public adicionaCarrinho(produto) {
    this.navCtrl.push(CarrinhoPage, { data: produto});
  }

  // método voltar à tela anterior
  public goBack() {
    this.navCtrl.pop();
  }

  // método get produtos
  public getProduts() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'products')
        .then(resposta => {
          this.produtos = resposta;
          // define se o preço 'de' do produto existe
          if(this.produto.precoDe == null){
            this.precoDe = false;
          }
          console.log(this.produtos);
          //this.setFilteredItems();
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  ionViewDidLoad() {}

}

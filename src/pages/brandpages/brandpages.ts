import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { MarcaPage } from '../marca/marca';

/**
 * Generated class for the BrandpagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-brandpages',
  templateUrl: 'brandpages.html',
})
export class BrandpagesPage {

  // variaveis
  public brands;
  public searchTerm: string = '';

  constructor(
    public navCtrl: NavController,
    private _data: DataProvider,
    private storage: Storage
  ) {
    this.setFilteredItems();
    this.getBrands(); 
  }

  ionViewDidLoad() {}

  // método de filtro de categorias
  public setFilteredItems() {
    this.brands = this._data.filterBrands(this.searchTerm);
  }

  // método get brands
  public getBrands() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'brands')
        .then(resposta => {
          this.brands = resposta;
          console.log(this.brands)
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  // método de selecionar marca
  public selecionaMarca(marca) {
    this.navCtrl.push(MarcaPage, { data: marca});
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

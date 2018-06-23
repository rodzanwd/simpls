import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-escolhe-categorias',
  templateUrl: 'escolhe-categorias.html',
})
export class EscolheCategoriasPage {

  public press: number = 0;
  public pan: number = 1;
  public swipe: number = 0;
  public tap: number = 0;
  public alerta: string = '';

  public brands;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _data: DataProvider,
    private storage: Storage
  ) {}

  ionViewDidLoad() { 
    this.getBrands(); 
  }

  pressEvent(e){
    this.press++;
    console.log(this.press);
  }

  public getBrands() {
    this.storage.get('token').then( (data) => {
      console.log(data)
      this._data.get(data.token, 'brands')
        .then(resposta => {
          this.brands = resposta;
          console.log(this.brands)
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  panEvent(e){
    this.pan++;
    
    if(this.pan <= 100){
      this.alerta = `Você escolheu ${this.pan}% dacategoria`
    }

  }

  swipeEvent(e){
    this.swipe++;
  }

  tapEvent(e){
    this.tap++;
  }

  public goBack() {
    this.navCtrl.pop();
  }
}


 

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cadastro-aviso1',
  templateUrl: 'cadastro-aviso1.html',
})
export class CadastroAviso1Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  //método de troca de tela 
  vaiParaAviso2() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAviso1Page');
  }

}

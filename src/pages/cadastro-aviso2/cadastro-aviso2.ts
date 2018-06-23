import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-cadastro-aviso2',
  templateUrl: 'cadastro-aviso2.html',
})
export class CadastroAviso2Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  //método de troca de página
  vaiParaCadastroTela1() {
    this.navCtrl.setRoot(CadastroPage);
  }

  ionViewDidLoad() {}

}

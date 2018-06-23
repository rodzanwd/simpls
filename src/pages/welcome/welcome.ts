import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VerificaUsuarioPage } from '../verifica-usuario/verifica-usuario';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {}

  irParaLogin() {
    this.navCtrl.setRoot(VerificaUsuarioPage) 
  }


  ionViewDidLoad() {}

}

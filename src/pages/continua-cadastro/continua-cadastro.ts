import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-continua-cadastro',
  templateUrl: 'continua-cadastro.html',
})
export class ContinuaCadastroPage {

  public data = this.navParams.get('data');

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController
  ) {
  }

  irParaHome() {
    this._alertCtrl.create({
      title: 'Não se preocupe!',
      subTitle: 'Você pode escolher suas categorias futuramente. Agora você será redirecionado para a página de login, onde seu email e sua senha cadastradas serão solicitados.',
      buttons: [{text: 'Ok', handler: () => {
        this.navCtrl.push(LoginPage, { data: this.data });
      }}]
    }).present();
  }

  irParaCategorias() {
    this.navCtrl.push(ContinuaCadastroPage, { data: this.data });
  }

  ionViewDidLoad() {}

}

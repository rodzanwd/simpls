import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Cadastro2Page } from '../cadastro2/cadastro2';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public nomeCompleto = '';
  public email = '';
  public password = '';
  public confirmaPassword: string = '';

  public model;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: Http,
    private _ctrlAlert: AlertController
  ) {}

  // método de cadastro
  public cadastro() {

    if(this.password != this.confirmaPassword) {
      this._ctrlAlert.create({
        title: 'As senhas não conferem',
        subTitle: 'Por favor digite senhas idênticas',
        buttons: [{text: 'Ok', handler: () => {
          this.navCtrl.push(CadastroPage);
        }}]
      })
    }

    this.model = {
      nome: this.nomeCompleto,
      email: this.email,
      login: this.email,
      password: this.password,
    }

    let data = this.model;

    this._ctrlAlert.create({
      title: 'Agora fala pouco...',
      subTitle: 'Precisamos só mais de algumas informações',
      buttons: [{text: 'Ok', handler: () => {
        this.navCtrl.push(Cadastro2Page, { data: data });
      }}]
    }).present();


  }

  ionViewDidLoad() {}

  public goBack() {
    this.navCtrl.pop();
  }

}

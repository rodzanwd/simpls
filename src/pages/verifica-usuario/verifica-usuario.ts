import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//Pages
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-verifica-usuario',
  templateUrl: 'verifica-usuario.html',
})
export class VerificaUsuarioPage {

  public token: any = '';
  public products;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, 
    private _storage: Storage
  ) {

    //this.token = this._storage.get('token');

    let loading = this.loadingCtrl.create({
      content: 'Carregando dados... por favor, espere um momennto'
    })

    loading.present();

    this._storage.get('token').then( (token) => {
      if(token != null){
        this.navCtrl.setRoot(HomePage)
      }else {
        this.alertCtrl.create({
          title: 'Desculpe, não encontramos seus dados no banco de dados',
          subTitle: 'Por favor, selecione a tela de Login (se você já é usuário) ou Cadastro (se é seu primeiro acesso)',
          buttons: [{text: 'Ok'}]
        }).present()
      }
    });
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
    
  }

  irParaLogin() {
    this.navCtrl.setRoot(LoginPage); 
  }

  irParaCadastro() {
    this.navCtrl.setRoot(CadastroPage); 
  }

  ionViewDidLoad() {}

  public goBack() {
    this.navCtrl.pop();
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  private data = this.navParams.get('data');

  private usuario: any;
  public id;
  public nome;
  public email;
  public data_nasc;
  public sexo;
  public celular;
  public escolaridade;
  public profissao;
  public renda;

  //public api  = 'http://simpls-me.umbler.net/';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _data: DataProvider,
    private storage: Storage,
    private _alertCtrl: AlertController,
    private http: Http
  ) {

    console.log('Data que veio da tela de perfil', this.data);

    this.getUser('users/profile');

    this.nome = this.data.nomeCompleto
    this.email = this.data.email;
    this.data_nasc = this.data.dataNasc;
    this.sexo = this.data.sexo;
    this.celular = this.data.celular;
    this.escolaridade = this.data.escolaridade;
    this.profissao = this.data.profissao;
    this.renda = this.data.renda;

    console.log('celular:', this.celular);

   }

   public getUser(rota) {
    this.storage.get('token').then( (token) => {
      this._data.get(token, rota)
        .then(resposta => {
          this.usuario = resposta;
          console.log(this.usuario);
        }).catch(err => {
          console.error(err);
        })
      ;
    });

  }

  editaUser() {

    let dados = {
      nomeCompleto: this.nome,
      email: this.email,
      data_nasc: this.data_nasc,
      sexo: this.sexo,
      celular: this.celular,
      escolaridade: this.escolaridade,
      profissao: this.profissao,
      renda: this.renda
    }

    console.log('Novos dados:', dados)

    console.log('Qual é a música?', dados.nomeCompleto)

    this.storage.get('token').then( (token) => {
      this._data.update(dados, this._data.apiUrl+`users`, token)
        .then(resposta => {
          this.usuario = resposta;
          console.log(this.usuario);
          //this.navCtrl.setRoot(PerfilPage);
        }).catch(err => {
          console.error(err);
          this._alertCtrl.create({
            title: 'Não foi possível realizar a atualização',
            subTitle: `Deu ruim demais, saca: ${err}`,
            buttons: [{text: 'Ok'}]
          }).present();
        });
    });


  }

  ionViewDidLoad() {
    
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

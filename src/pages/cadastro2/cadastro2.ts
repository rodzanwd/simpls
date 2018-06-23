//angular dependencies
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

//ionic dependecies
import { NavController, NavParams, AlertController } from 'ionic-angular';

//pages
import { LoginPage } from '../login/login';
import { DataProvider } from '../../providers/data/data';
import { CadastroPage } from '../cadastro/cadastro';


@Component({
  selector: 'page-cadastro2',
  templateUrl: 'cadastro2.html',
})
export class Cadastro2Page {

  public residencialTrue: boolean = false;
  public trabalhosTrue: boolean = false;

  // variável que recebe a api
  public apiUrl = this._data.apiUrl;

  //variável que recebe os dados do usuário da tela anterior
  public user = this.navParams.get('data');

  //variáveis do formulário
  public nomeCompleto: '';
  public email: '';
  public password: '';
  public cep : any;
  public rua: any;
  public complemento : any;
  public numero : any;
  public bairro : any;
  public cidade : any;
  public uf : any;
  public tipoEndereco: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: Http,
    private _alertCtrl: AlertController,
    private _data: DataProvider
  ) {}
  
  

  callService(cep: String): any{
    return this._http.get(`https://viacep.com.br/ws/${cep}/json/`)
    
  }

  public getEndereco() {
    this.callService(this.cep)
    .subscribe(data => {
      data = data.json();
      console.table(data)
      this.rua = data.logradouro;
      this.bairro = data.bairro;
      this.cidade = data.localidade;
      this.uf = data.uf;
    });
  }

  concluiCadastro(data) {
    
    let model = {
      nomeCompleto: this.user.nome,
      email: this.user.email,
      password: this.user.password,
      cep: this.cep,
      rua: this.rua,
      complemento: this.complemento,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.uf,
      tipoEndereco: this.tipoEndereco
    }

    data = model;

    console.table(data);

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return new Promise(resolve => {
      this._http
        .post(this.apiUrl+'users', data, { headers: headers })
        .subscribe(result => {
          resolve(result);
          console.log(result);
          this._alertCtrl.create({
            title: 'Seu cadastro foi realizado com sucesso!',
            subTitle: 'Você será direcionado para a tela de Login',
            buttons: [{text: 'Ok', handler: () => {
              this.navCtrl.push(LoginPage, { data: data });
            }}]
          }).present();
        }, err => {
          this._alertCtrl.create({
            title: 'Não foi possível realizar seu cadastro!',
            subTitle: 'Por favor, reveja seus dados ou tente novamente mais tarde',
            buttons: [{text: 'Ok', handler: () => {
              this.navCtrl.push(CadastroPage);
            }}]
          }).present();
        })
      ;
    })
   
    
  }

  public imgResidencialEhTrue() {
    this.residencialTrue = true;
    this.trabalhosTrue = false;
    this.tipoEndereco = 'Residencial';
  }

  public imgTrabalhoEhTrue() {
    this.residencialTrue = false;
    this.trabalhosTrue = true;
    this.tipoEndereco = 'Profissionl';
  }

  ionViewDidLoad() {}

}

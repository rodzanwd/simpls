import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Spinner, Platform } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public items: any;

  public email: string = '';
  public password: string = '';

  public dataFace;
  public isLogged: boolean = false;
  public users: any;

  constructor(
    public navCtrl: NavController, 
    private http: Http,
    private _facebook: Facebook,
    private storage: Storage,
    private _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController,
    private _data: DataProvider,
    private platform: Platform
    
  ) {
    if (this.platform.is('cordova ')) {
      _facebook.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if(res.status === "connect") {
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      })
      }
    } 
    

  ionViewDidLoad() {}

  public setStorage(token, key) {
    this.storage.set(token, key);
  }

  public login(data) {

    data = {
      email: this.email,
      password: this.password,
      token: ''
    }

    let key = new Date().toDateString();
    let headers = new Headers();
    

    return new Promise(resolve => {
      this._data
        .post(data, 'login')
        .then(result => {
          let loading = this._loadingCtrl.create({
            content: 'Login realizado com sucesso!<br />Estamos redirecionando você para a página inicial.',
            spinner: 'bubbles'
          })
          loading.present();
          this.navCtrl.setRoot(HomePage, { data: result });
          loading.dismiss();
        }, err => {
          this._alertCtrl.create({
            title: 'Não foi possível realizar o login',
            subTitle: 'Email ou senha incorretos',
            buttons: [{text: 'Ok'}]
          }).present();
        })
      ;
    })
  }

  //login com facebook
  loginFC() {

    this._facebook.login(['public_profile', 'user_friends', 'email'])
    .then(res => {
      if(res.status === "connected") {
        this.isLogged = true;
        this._alertCtrl.create({
          title: 'oia os dados',
          subTitle: res.authResponse.accessToken,
          buttons: [{text: 'Ok'}]
        }).present();
        //this.getUserDetail(res.authResponse.userID);
      } else {
        this.isLogged = false;
      }
    })
    .catch(
      e => {
        this._alertCtrl.create({
          title: 'Não foi possível realizar o login com o Facebook',
          subTitle: 'Por favor, tente mais tarde',
          buttons: [{text: 'Ok'}]
        }).present();
        console.log('Error logging into Facebook', e);
      });

  }

  logout() {
    this._facebook.logout()
      .then( res => this.isLogged = false)
      .catch(e => {
        console.log('Não foi possível fazer o logout com Facebook', e);
        this._alertCtrl.create({
          title: 'Não foi possível realizar o logout com o Facebook',
          subTitle: 'Por favor, tente mais tarde',
          buttons: [{text: 'Ok'}]
        }).present();
      });
  }

  getUserDetail(userid) {
    this._facebook.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        this.users = res;
        console.table(`DADOS DO USUÁRIO:${this.users}`);
        this.navCtrl.setRoot(HomePage, { data: res });
      })
      .catch(e => {
        console.log(e);
        this._alertCtrl.create({
          title: 'Não foi possível realizar o login com o Facebook',
          subTitle: 'Não conseguimos acessar seus dados no Facebook. Por favor, tente mais tarde',
          buttons: [{text: 'Ok'}]
        }).present();
      });
  }


  loginFacebook() {
    /*this._facebook.login(['email', 'public_profile'])
      .then(( response: FacebookLoginResponse ) => {
        this.dataFace = response;
        this.isLogged = true;
        this._facebook.api('me?fields=id,name,email,first_name,picture.width(720).as(picture_large)', [])
          .then(profile => {
            let userData = { 
              email: profile['email'] ,
              first_name: profile['first_name'],
              picture: profile['picture_large'['data']['url']],
              username: profile['name']
            }
            return;
          })
      }).catch(err => {
        this._alertCtrl.create({
          title: 'Não foi possível realizar o login com o Facebook',
          subTitle: 'Por favor, tente mais tarde',
          buttons: [{text: 'Ok'}]
        }).present();
      });
    ;*/

    this._facebook.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        this.navCtrl.setRoot(HomePage, { data: res })
      }) 
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this._alertCtrl.create({
          title: 'Não foi possível realizar o login com o Facebook',
          subTitle: 'Por favor, tente mais tarde',
          buttons: [{text: 'Ok'}]
        }).present();
      })
    ; 

  }

  public goBack() {
    this.navCtrl.pop();
  }

}

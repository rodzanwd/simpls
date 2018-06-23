//angular dependencies
import { Component } from '@angular/core';

//ionic dependencies
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//providers
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-formas-pagamento',
  templateUrl: 'formas-pagamento.html',
})
export class FormasPagamentoPage {

  public users;
  public nome;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _data: DataProvider,
    private storage: Storage
  ) {
    this.getUser('users/profile');
  }

  ionViewDidLoad() {}

  public getUser(rota) {
    this.storage.get('token').then( (token) => {
      this._data.get(token, rota)
        .then(resposta => {
          this.users = resposta;
          console.log(this.users)
          this.nome = this.users.nomeCompleto;
          console.log(this.nome)
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

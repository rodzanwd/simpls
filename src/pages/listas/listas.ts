//Angular dependencies
import { Component } from '@angular/core';

//Ionic dependencies
import { NavController, NavParams } from 'ionic-angular';

//Pages
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { CarrinhoPage } from '../carrinho/carrinho';
import { OpinioesPage } from '../opinioes/opinioes';
import { BrandpagesPage } from '../brandpages/brandpages';
import { PostsPage } from '../posts/posts';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {

  public lists;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _data: DataProvider,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() { this.getLists(); }

  public getLists() {
    this.storage.get('token').then( (token) => {
      
      this._data.get(token, 'lists')
        .then(resposta => {
          this.lists = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  // navegação do menu header

  public navListas() {
    this.navCtrl.setRoot(ListasPage);
  }

  public navPosts() {
    this.navCtrl.setRoot(PostsPage);
  }

  // navegação do menu footer

  public navHome() {
    this.navCtrl.setRoot(HomePage);
  }

  public navBrand() {
    this.navCtrl.setRoot(BrandpagesPage);
  }

  public navCarrinho() {
    this.navCtrl.setRoot(CarrinhoPage);
  }

  public navOpinioes() {
    this.navCtrl.setRoot(OpinioesPage);
  }

  public navPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { CarrinhoPage } from '../carrinho/carrinho';
import { OpinioesPage } from '../opinioes/opinioes';
import { BrandpagesPage } from '../brandpages/brandpages';
import { ListasPage } from '../listas/listas';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  posts: any;
  postsByBody: any;
  searchTerm: string = '';

  public likes: number = 0;

  public postComment: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _data: DataProvider,
    private storage: Storage

  ) {

    this.setFilteredPosts();

  }

  ionViewDidLoad() { this.getPosts(); }

  setFilteredPosts() {
 
    this.posts = this._data.filterPosts(this.searchTerm);

  }

  likeComment(e) {
    this.likes++;
  }

  newComment() {
    this.postComment = true;
  }

  public getPosts() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'posts')
        .then(resposta => {
          this.posts = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    })
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

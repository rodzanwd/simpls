import { Component, Inject } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//providers
import { DataProvider } from '../../providers/data/data';

//pages
import { ProdutoPage } from '../produto/produto';
import { BrandPage } from '../brand/brand';

//components
import { ModalComponent } from '../../components/modal/modal';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //declara as variáveis públicas
  public apiUrl = 'http://simpls-me.umbler.net/';
  
  public produtos;
  public searchTerm: string = '';
  public items;

  //variaveis que recebem o resultado da consulta
  public brands;
  public products;
  public products_01;
  public products_02;
  public products_03;
  public prodImg;
  public posts;
  public users;
  public categories;

  private modal = this.modalCtrl.create(ModalComponent);

  constructor(
    public navCtrl: NavController,
    private _data: DataProvider,
    private storage: Storage,
    @Inject('StorageCarrinho') private _storageCarrinho: Storage,
    private modalCtrl: ModalController,
    private _alertCtrl: AlertController,
  ) {

    this.getProduts_page01();
    this.getProduts_page02();
    this.getProduts_page03();
    this.getCategories();

  }

  //consulta a api e returna um json com os produtos cadastrados
  //também faz o filtro dos produtos baseado no nome
  public setFilteredItems() {
    this.produtos = this._data.filterItems(this.searchTerm);
  }

  /*filterItems(ev: any) {
    this.getProduts();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.products = this.products.filter(function(product) {
        return product.toLowerCase().includes(val.toLowerCase());
      });
    }
  }*/

  filterItems(searchTerm){
    return this.products.filter((product) => {
      return product.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });  

  }

  //consulta a api e retorna um json com as marcas cadastradas
  public getCategories() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'categories')
        .then(resposta => {
          this.categories = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  //método get produtos
  public getProduts_page01() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'products/6/0')
        .then(resposta => {
          this.products_01 = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  public getProduts_page02() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'products/6/1')
        .then(resposta => {
          this.products_02 = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  public getProduts_page03() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'products/6/2')
        .then(resposta => {
          this.products_03 = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  public getProduts() {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'products/6/1')
        .then(resposta => {
          this.products = resposta;
        }).catch(err => {
          console.error(err);
        })
      ;
    });
  }

  //método adiciona produto no carrinho
  public adicionaProduto(produto) {

    //recebe os dados da tela
    let data = {
      produto: {
        categorias: produto.categorias,
        id: produto._id,
        descricao: produto.descricao,
        ean: produto.ean,
        imagem: produto.imagem,
        industria: produto.industria,
        marca: produto.marca,
        nome: produto.nome,
        precoDe: produto.precoDe,
        precoPor: produto.precoPor,
        quantidade: 1
      }
      
    };

    //seta os dados no storage e chama a função updateCarrinho
    this.storage.get('token').then((token) => {
      this._data.get(token, 'users/carrinho')
        .then((resposta: any[]) => {
          this.produtos = resposta;
          this.produtos = this.produtos.carrinho;
          this.items = this.produtos.push(data)
          this._storageCarrinho.set('produto', this.produtos);
          let result = this._storageCarrinho.get('produto');
          console.log(result);
          this.updateCarrinho(result)
        }).catch(err => {
          console.error(err);
        })
      ;
    });

  }

  //atualiza o carrinho de compras
  public updateCarrinho(data) {
    this.modal.present();
    this.storage.get('token').then( (token) => {
      this._storageCarrinho.get('produto').then(() => {
        this._data.updateCarrinho(data, `${this._data.apiUrl}users/profile`, token)
          .then(resposta => {
            console.log(resposta);
          }).catch(err => {
            this._alertCtrl.create({
              title: 'Não foi possível inserir o produto no carrinho',
              subTitle: `Por `,
              buttons: [{text: 'Ok'}]
            }).present();
          })
        ;
      });
    });
    setTimeout(() => {
      this.modal.dismiss();
    }, 1500);
  }

  // seleciona o produto e abre a pagina do produto selecionado
  public selecionaProduto(produto) {
    this.navCtrl.push(ProdutoPage, { data: produto});
  }

  public selecionaBrand(brand) {
    this.navCtrl.push(BrandPage, { data: brand});
  }

  public goBack() {
    this.navCtrl.pop();
  }

  public goCart() {
    this.navCtrl.push(CarrinhoPage);
  }
  
}



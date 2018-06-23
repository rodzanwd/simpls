import { Component, Inject } from '@angular/core';
import { ModalController, NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { ModalComponent } from '../modal/modal';
import { ProdutoPage } from '../../pages/produto/produto';

@Component({
  selector: 'slide',
  templateUrl: 'slide.html'
})
export class SlideComponent {
  //variaveis
  public products;
  public produtos;
  public quantidade = 1;
  private modal = this.modalCtrl.create(ModalComponent);

  items:any = [];

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    @Inject('StorageCarrinho') private _storageCarrinho: Storage,
    private modalCtrl: ModalController,
    private _alertCtrl: AlertController,
    private _data: DataProvider
  ) {
    //chama o get produtos
    this.getProduts();
  }

  //método get produtos
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

  // método seleciona produto - vai para a página do produto
  public selecionaProduto(produto) {
    this.navCtrl.push(ProdutoPage, { data: produto});
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
   this.modal.dismiss();
  }

}

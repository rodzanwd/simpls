import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, Button, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

import { EditarPerfilPage } from '../editar-perfil/editar-perfil';

import { DataProvider } from '../../providers/data/data';
import { WelcomePage } from '../welcome/welcome';
import { TotalPedidosPage } from '../total-pedidos/total-pedidos';
import { MensagensPage } from '../mensagens/mensagens';
import { FormasPagamentoPage } from '../formas-pagamento/formas-pagamento';
import { EnderecosCadastradosPage } from '../enderecos-cadastrados/enderecos-cadastrados';
import { NotificacoesPage } from '../notificacoes/notificacoes';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public users;
  public id;
  public endereco;
  public nome;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _data: DataProvider,
    private storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { 
    this.getUser('users/profile')
    
  }

  public getUser(rota) {
    this.storage.get('token').then( (token) => {
      this._data.get(token, rota)
        .then(resposta => {
          this.users = resposta;
          console.log('Bom, esta é a resposta com os dados do user', this.users)
          this.nome = this.users.nomeCompleto;
          this.endereco = `${this.users.rua}`;
        }).catch(err => {
          console.error(err);
        })
      ;
    });

  }

  public shareApp() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Compartilhe o Simpls nas redes sociais',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.shareWithFacebook();
            console.log('Compartilhar no Facebook');
          }
        },{
          text: 'Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.shareWithTwitter();
            console.log('Compartilhar no Twitter');
          }
        }, {
        text: 'Whatsapp',
        icon: 'logo-whatsapp',
        handler: () => {
          this.shareWithWhatsapp();
          console.log('Compartilhar no Whatsapp');
        }
       },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Compartilhamento cancelado');
          }
        }
      ]
    });
    actionSheet.present();
  }

  public shareWithFacebook() {
    let message = 'Baixei o Simpls e estou adorando! Nunca foi tão confortável fazer compras!'
    let url = 'http://google.com';
    this.socialSharing.shareViaFacebook(message, url).then((data) => {
      console.log('Foi postado no Facebook', data)
    }).catch((err) => {
      console.error('Deu erro, rolou não', err);
      this.alertCtrl.create({
        title: 'Não foi possível carregar o compartilhamento',
        subTitle: 'Por favor, tente mais tarde',
        buttons: [{text: 'Ok'}]
      }).present();
    });
  }

  public shareWithTwitter() {
    let message = 'Baixei o Simpls e estou adorando! Nunca foi tão confortável fazer compras!'
    let url = 'http://google.com';
    this.socialSharing.shareViaTwitter(message, url).then((data) => {
      console.log('Foi postado no Twitter', data)
    }).catch((err) => {
      console.error('Deu erro, rolou não', err);
      this.alertCtrl.create({
        title: 'Não foi possível carregar o compartilhamento',
        subTitle: 'Por favor, tente mais tarde',
        buttons: [{text: 'Ok'}]
      }).present();
    });
  }

  public shareWithWhatsapp() {
    let message = 'Baixei o Simpls e estou adorando! Nunca foi tão confortável fazer compras!'
    let url = 'http://google.com';
    this.socialSharing.shareViaWhatsApp(message, url).then((data) => {
      console.log('Foi postado no Facebook', data)
    }).catch((err) => {
      console.error('Deu erro, rolou não', err);
      this.alertCtrl.create({
        title: 'Não foi possível carregar o compartilhamento',
        subTitle: 'Por favor, tente mais tarde',
        buttons: [{text: 'Ok'}]
      }).present();
    });
  }

  public selecionaPerfil(perfil) {
    this.storage.get('token').then( (token) => {
      this._data.get(token, 'users/profile')
        .then(resposta => {
          this.users = resposta;
          let id = this.users.id;
          console.log('Id: ', id)
          console.log(this.users);
          this.navCtrl.push(EditarPerfilPage, { data: this.users});
        }).catch(err => {
          console.error(err);
        })
      ;
    });
    
  }

  private logout(){
    this.alertCtrl.create({
      title: 'Tem certeza disso?',
      subTitle: 'Quer realmente sair do Simpls?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this.mensagem('Que bom que decidiu ficar!');
          }
        },
        {
          text: 'Sair',
          handler: () => {
            this.mensagem('Por favor, aguarde um minuto...');
            this.storage.remove('token');
            this.mensagem('Você saiu do Simpls!');
            this.navCtrl.setRoot(WelcomePage);
          }
        }
      ]
    }).present();
    
  }

  public mensagem(mensagem) {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: mensagem
    })
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  public irParaPedidos() {
    this.navCtrl.push(TotalPedidosPage);
  }

  public irParaMensagens() {
    this.navCtrl.push(MensagensPage);
  }

  public irFormasPagamento() {
    this.navCtrl.push(FormasPagamentoPage);
  }

  public enderecosCadastrados() {
    this.navCtrl.push(EnderecosCadastradosPage);
  }

  public notificacoes() {
    this.navCtrl.push(NotificacoesPage);
  }

  ionViewDidLoad() {}

  

  public goBack() {
    this.navCtrl.pop();
  }

}

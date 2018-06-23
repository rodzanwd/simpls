import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-faca-sua-pergunta',
  templateUrl: 'faca-sua-pergunta.html',
})
export class FacaSuaPerguntaPage {

  public titulo;
  public mensagem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacaSuaPerguntaPage');
  }

  public cadastrarMensagem() {
    
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

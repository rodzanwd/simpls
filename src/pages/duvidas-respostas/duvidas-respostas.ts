import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacaSuaPerguntaPage } from '../faca-sua-pergunta/faca-sua-pergunta';

@IonicPage()
@Component({
  selector: 'page-duvidas-respostas',
  templateUrl: 'duvidas-respostas.html',
})
export class DuvidasRespostasPage {

  public isTrue: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuvidasRespostasPage');
  }

  public facaSuaPergunta() {
    this.navCtrl.push(FacaSuaPerguntaPage);
  }

  public isFalse() {
    this.isTrue = false;
  }

  public goBack() {
    this.navCtrl.pop();
  }

}

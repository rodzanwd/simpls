import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DuvidasRespostasPage } from '../duvidas-respostas/duvidas-respostas';
import { DuvidasPage } from '../duvidas/duvidas';
import { AvaliarPage } from '../avaliar/avaliar';
import { TermosPage } from '../termos/termos';
import { PoliticaPage } from '../politica/politica';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'  
})
export class InfoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {}

  goBack() {
    this.navCtrl.pop();
  }

  public irParaDuvidas() {
    this.navCtrl.push(DuvidasRespostasPage);
  }

  public irParaPerguntasFrequentes() {
    this.navCtrl.push(DuvidasPage);
  }

  public irParaPolitica() {
    this.navCtrl.push(PoliticaPage);
  }

  public irParaTermos() {
    this.navCtrl.push(TermosPage);
  }

  public irParaSerEntregador() {
    this.navCtrl.push(AvaliarPage);
  }

}

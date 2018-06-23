import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrinhoPage } from '../../pages/carrinho/carrinho';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(
    public navCtrl: NavController
  ) {}

  public goBack() {
    this.navCtrl.pop();
  }

  public goCart() {
    this.navCtrl.push(CarrinhoPage);
  }

}

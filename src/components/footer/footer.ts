import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { InfoPage } from '../../pages/info/info';
import { PerfilPage } from '../../pages/perfil/perfil';

@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  constructor(
    public navCtrl: NavController
  ) { }

  // navegação do menu footer

  public navHome() {
    this.navCtrl.setRoot(HomePage);
  }

  public navInfo() {
    this.navCtrl.setRoot(InfoPage);
  }

  public navPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }

}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../providers/data/data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  categories;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private storage: Storage,
    private _data: DataProvider,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    // lista categorias no menu
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


}

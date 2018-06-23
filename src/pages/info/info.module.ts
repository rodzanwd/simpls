import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoPage } from './info';
import { HeaderComponent } from '../../components/header/header';

@NgModule({
  declarations: [
    InfoPage,
    HeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(InfoPage),
  ],
})
export class InfoPageModule {}

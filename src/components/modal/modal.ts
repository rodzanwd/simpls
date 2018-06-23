import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent { 

  public isTrue: boolean = true;

  constructor( 
    private _navCtrl: NavController,
    private _loadingCtrl: LoadingController
  ) {}

  modalOff() {
    this.isTrue = false;
  }

}

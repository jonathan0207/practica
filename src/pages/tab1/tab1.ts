import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CitasProvider } from '../../providers/equipos/citas';
import { Modal2Page } from '../modal2/modal2';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  citas: any = [];

  // cita: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public cp: CitasProvider) {

    this.cp.getcitas().valueChanges()
      .subscribe((citasFB: any = []) => { this.citas = citasFB; })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  irAdetallesExistentes(cita) {
    this.navCtrl.push(Modal2Page, { cita: cita });
  }

  borrar(cita) {
    return this.cp.eliminarcita(cita);
  }

}

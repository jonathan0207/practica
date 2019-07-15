import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CitasProvider } from '../../providers/equipos/citas';
import { Modal2Page } from '../modal2/modal2';

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  citas: any = [];

  cita: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public cp: CitasProvider) {
     
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  irAdetalles() {
    const Modal = this.modalCtrl.create(Modal2Page);
    Modal.present();
  }

  borrar() {
    this.cp.eliminarcita(this.cita);
  }

}

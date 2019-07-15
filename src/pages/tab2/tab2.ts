import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EquiposProvider } from '../../providers/equipos/equipos';
import { Modal2Page } from '../modal2/modal2';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  equipos: any=[];

  equipo:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, 
    public ep:EquiposProvider ) {
      this.ep.getEquipos().valueChanges()
      .subscribe((equiposFB)=>{this.equipos=equiposFB;})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  irAdetalles(){
    const Modal =this.modalCtrl.create(Modal2Page);
    Modal.present();
    }

    borrar(){
      this.ep.eliminarEquipo(this.equipo);
    }

}

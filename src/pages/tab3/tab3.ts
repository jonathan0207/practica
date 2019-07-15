import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { LugaresProvider } from '../../providers/lugares/lugares'
// import { LugarPage } from '../lugar/lugar';



@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {

  lugares: any=[
    {nombre:'jonathan', ocupacion:'estudiante', direccion:'calle y carrera'},
    {nombre:'camilo', ocupacion:'estudiante', direccion:'calle y carrera'},
    {nombre:'lao', ocupacion:'conductor', direccion:'calle y carrera'}

  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl:ModalController, public lp:LugaresProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  irAdetallesExistentes(){
    
  }

  irAdetalles(){
    const Modal =this.modalCtrl.create(ModalPage);
    Modal.present();
    }
 

}



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { LugaresProvider } from '../../providers/lugares/lugares';
// import { LugarPage } from '../lugar/lugar';



@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {

  medicos: any=[];
  // lugar:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl:ModalController, public lp:LugaresProvider) {

      this.lp.getLugares().valueChanges()
      .subscribe((medicosFB:any=[])=>{this.medicos=medicosFB;})
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  irAdetallesExistentes(lugar){
    this.navCtrl.push(ModalPage, {lugar: lugar})

  }

  irAdetalles(){
    const Modal =this.modalCtrl.create(ModalPage);
    Modal.present();
    }

    borrarM(medico) {
      return this.lp.eliminarLugar(medico);
    }
 

}



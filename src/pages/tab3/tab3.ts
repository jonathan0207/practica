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

  lugares: any=[];
  lugar:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl:ModalController, public lp:LugaresProvider) {
      this.lp.getLugares().valueChanges()
      .subscribe((equiposFB)=>{this.lugares=equiposFB;})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  irAdetallesExistentes(){
    this.navCtrl.push(ModalPage, {lugar:this.lugar})

  }

  irAdetalles(){
    const Modal =this.modalCtrl.create(ModalPage);
    Modal.present();
    }
 

}



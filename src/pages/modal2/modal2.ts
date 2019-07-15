import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { EquiposProvider } from '../../providers/equipos/equipos'
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the Modal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal2',
  templateUrl: 'modal2.html',
})
export class Modal2Page {

  equipo:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public ep:EquiposProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal2Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  guardarLugar(){
  
    this.equipo.id=Date.now();
    this.ep.createEquipo(this.equipo);
    console.log(this.equipo);
    alert('Se Guardo Con Exito');
    this.navCtrl.pop();
    // if(this.guardarLugar){
    //   alert('error');
    // }else{
    //   alert('bien');
    // }
  
  }
}

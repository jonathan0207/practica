import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { CitasProvider } from '../../providers/equipos/citas';
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

  cita:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public cp:CitasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal2Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  guardarLugar(){
    if(!this.cita.id){
      this.cita.id=Date.now();

    } this.cp.createcita(this.cita);
    console.log(this.cita);
    alert('Se Guardo Con Exito');
    this.navCtrl.pop();
    // if(this.guardarLugar){
    //   alert('error');
    // }else{
    //   alert('bien');
    // }
  
  }
}

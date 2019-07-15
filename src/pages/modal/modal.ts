import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { LugaresProvider } from '../../providers/lugares/lugares'
import { TabsPage } from '../tabs/tabs';
import { threadId } from 'worker_threads';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  lugar:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController, public lp:LugaresProvider) {

                // this.lugar= navParams.get('lugar')
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  guardarLugar(){
  
    this.lugar.id=Date.now();
    this.lp.createLugar(this.lugar);
    console.log(this.lugar);
    alert('Se Guardo Con Exito');
    this.navCtrl.pop();
    // if(this.guardarLugar){
    //   alert('error');
    // }else{
    //   alert('bien');
    // }
  
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { LugaresProvider } from '../../providers/lugares/lugares';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  medico:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController, public lp:LugaresProvider) {

                // this.lugar= navParams.get('lugar')
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  guardarLugar(){
  
    this.medico.id=Date.now();
    this.lp.createLugar(this.medico);
    console.log(this.medico);
    alert('Se Guardo Con Exito');
    this.navCtrl.pop();
    // if(this.guardarLugar){
    //   alert('error');
    // }else{
    //   alert('bien');
    // }
  
  }

}

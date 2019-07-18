import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CitasProvider } from '../../providers/equipos/citas';
import { EmailComposer } from '@ionic-native/email-composer';
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

  cita: any = {};
  Cita: string = '';
  subject = 'Tu cita';
  body = 'Tu cita se Agendo correctamente el hospital se pondra en contracto contigo';
  to = 'jonathanflorez07@gmail.com';
  cc = this.cita.email;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public cp: CitasProvider, public emailComposer: EmailComposer) {

    this.Cita = navParams.get('cita');
  }

  enviarCorreo() {
    let email = {
      to: this.to,
      cc: this.cc,
      bcc: [],
      attachment: [],
      subject: this.subject,
      body: this.body,
      isHtml: true,
      app: 'Gmail'
    };

    this.emailComposer.open(email);
    console.log(email);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal2Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  guardarLugar() {
    if (!this.cita.id) {
      this.cita.id = Date.now();

    } this.cp.createcita(this.cita);
    console.log(this.cita);
    alert('Se Guardo Con Exito Tu Cita');
    this.navCtrl.pop();
    // if(this.guardarLugar){
    //   alert('error');
    // }else{
    //   alert('bien');
    // }

  }
}

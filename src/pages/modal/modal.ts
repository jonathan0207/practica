import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LugaresProvider } from '../../providers/lugares/lugares';
import { EmailComposer } from '@ionic-native/email-composer'

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  medico: any = {};
  subject = 'Tu cita';
  body = 'Tu cita se Agendo correctamente el hospital se pondra en contracto contigo';
  to = 'jflorezh@hptu.org.co';
  cc = this.medico.email;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public lp: LugaresProvider, public emailComposer: EmailComposer) {

    // this.lugar= navParams.get('lugar')
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  enviarCorreoM() {
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


  guardarLugar() {

    this.medico.id = Date.now();
    this.lp.createLugar(this.medico);
    console.log(this.medico);
    alert('Se Guardo Con Exito El Medico');
    this.navCtrl.pop();



  }

}


import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'


@Injectable()
export class CitasProvider {

  constructor(public afdb:AngularFireDatabase) {
    
  }

  getcitas(){
    return this.afdb.list('/citas/');
  }

  getcita(id){
    return this.afdb.object('/citas/'+id);
  }

  createcita(cita){
    return this.afdb.database.ref('/citas/'+ cita.id).set(cita);
  }

  editarcita(cita){
    return this.afdb.database.ref('/citas/'+ cita.id).set(cita);
  }

  eliminarcita(cita){
    return this.afdb.database.ref('/citas/'+cita.id).remove(cita);
  }



}

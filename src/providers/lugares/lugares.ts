import { AngularFireDatabase } from 'angularfire2/database'
import { Injectable } from '@angular/core';
// import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable()
export class LugaresProvider {

  constructor(public afdb:AngularFireDatabase) {
    
  }

  getLugares(){
    return this.afdb.list('/lugares/')
  }

  getLugar(id){
    return this.afdb.object('/lugares/'+id)
  }

  createLugar(lugar){
    return this.afdb.database.ref('/lugares/'+ lugar.id).set(lugar);
  }

  editarLugar(lugar){
    return this.afdb.database.ref('/lugares/'+ lugar.id).set(lugar);
  }

  eliminarLugar(lugar){
    return this.afdb.database.ref('/lugares/'+ lugar.id).remove(lugar);
  }

}

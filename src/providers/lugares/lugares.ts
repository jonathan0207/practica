import { AngularFireDatabase } from 'angularfire2/database'
import { Injectable } from '@angular/core';
// import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable()
export class LugaresProvider {

  constructor(public afdb:AngularFireDatabase) {
    
  }

  getLugares(){
    return this.afdb.list('/medicos/')
  }

  getLugar(id){
    return this.afdb.object('/medicos/'+id)
  }

  createLugar(medico){
    return this.afdb.database.ref('/medicos/'+ medico.id).set(medico);
  }

  editarLugar(medico){
    return this.afdb.database.ref('/medicos/'+ medico.id).set(medico);
  }

  eliminarLugar(medico){
    return this.afdb.database.ref('/medicos/'+ medico.id).remove();
  }

}

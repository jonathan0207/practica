import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'


@Injectable()
export class EquiposProvider {

  constructor(public afdb:AngularFireDatabase) {
    
  }

  getEquipos(){
    return this.afdb.list('/equipos/')
  }

  getEquipo(id){
    return this.afdb.object('/equipos/'+id)
  }

  createEquipo(equipo){
    return this.afdb.database.ref('/equipos/'+ equipo.id).set(equipo);
  }

  editarEquipo(equipo){
    return this.afdb.database.ref('/equipos/'+ equipo.id).set(equipo);
  }

  eliminarEquipo(equipo){
    return this.afdb.database.ref('/equipos/'+equipo.id).remove(equipo);
  }



}

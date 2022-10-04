import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroes:string []=['Goku','Vegetta','Gohan','pikoro'];
  heroeBorrado:string= '';
 
  borrarHeroe(){
   this.heroeBorrado = this.heroes.pop()||'';  //almacena al heroe borrado, esto podemos mostrarlo
  }
   
  
}

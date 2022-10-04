import {Component} from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
nombre:string = 'Garen';
edad:number=22;

get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
}

obtenerNombre():string{
    // return `
    // // ${this.nombre} - ${this.edad}; javascript
    // `
    return this.nombre + ' - ' + this.edad;
    
}
cambiarNombre():void{
    this.nombre = 'Darius';
}
cambiarEdad():void{
    this.edad = 24;
}
}
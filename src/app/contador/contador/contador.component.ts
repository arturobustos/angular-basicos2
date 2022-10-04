import {Component} from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    <!--aqui ponemos todo el codigo de html, OJO, solo en este caso-->
    <h1>{{title}}</h1>

<!--EL EVENTO CLICK NOS PERMITE AGREGAR UN EVENTO
QUE SE ACTIVARA CON UN CLICK-->

<h1>METODOS DIFERENTES</h1>
<!-- <button (click)="numero = numero+1;">+1</button> los metodos se deben hacer en el js -->
<button (click)="sumar(+1)">Sumar +1</button> <!--esta seria la forma correcta-->
<!--aqui no es necesario el this porque todo ya hace referencia a la 
misma clase-->
<span>{{numero}}</span>

<button (click)="restar(-1)">restar -1</button>
<!-- <button (click)="numero = numero -1;">-1</button> -->
<br>
<br>
<H1>METODOS IGUALES</H1>
<button (click)="acumular(+1)">Sumar +1</button><!--marca error porque no mandamos valor-->
<span>{{numero2}}</span>
<button (click)="acumular(-1)">Restar -1</button><!--forma correcta de enviar datos a un metodo-->

<p>Tarea: crear una base con el valor de 5, descontar o sumar de 5 en 5 con la propiedad</p>
<h2>la base es: <strong>{{base}}</strong></h2>

<button (click)="acumularBase(base)">Sumar +{{base}}</button>
<span>{{numero3}}</span>
<button (click)="acumularBase(-base)">Restar -{{base}}</button>

    `
})

export class contadorComponent{
    //el codigo de APP.COMPONENT.TS
    public title: string = 'Contador App';
  numero:number = 100;
  numero2:number = 100;
  numero3:number = 100;
  base:number = 5;

  //nos podemos crear metodos
  sumar(valor:number){
    //this. hace referencia a la propiedad de la class
    this.numero += valor ; //numero = numero + 1;
  }
  restar(valor:number){
    this.numero -= valor;
  }

  //COMO SUMAR Y RESTAR SON PRACTICAMENTE EL MISMO METODO 
  //EN VEZ DE ESCRIBIRLO DOS VECES PODEMOS MANDARLE UN ARGUMENTO
  //QUE INDIQUE SI SUMAMOS O RECTAMOS

  acumular(valor:number){
    this.numero2 +=valor;
  }

  acumularBase(valor:number){
    this.numero3 +=valor;
  }
}
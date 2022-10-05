import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{titulo}}</h1>
    
    <button (click)="acumulador(-1)"> - 1 </button>
    
    <span>{{numero}}</span>
    
    <button (click)="acumulador(+1)"> + 1 </button>
    
    <br>
    <h2>Tarea de Acumulación</h2>
    
    <button (click)="acumulador2(-acumu)"> - {{acumu}} </button>
    <h3>La base es: <strong> {{base}} </strong></h3>
    <button (click)="acumulador2(acumu)"> + {{acumu}} </button> 
    `
    
})
export class ContadorComponent{
    titulo: string = 'Contado App';
    numero: number = 10;
  
    /*sumar(){
      this.numero += 1;
    }*/
  
    /*restar(){
      this.numero -= 1;
    }*/
    
    //Haciendolo en un solo metodo SUMAR Y RESTAR
    acumulador( valor: number){
      this.numero += valor;
    }
  
    base: number = 5;
    acumu: number = 5;
  
    acumulador2( valor2: number){
      this.base += valor2;
    }  

}
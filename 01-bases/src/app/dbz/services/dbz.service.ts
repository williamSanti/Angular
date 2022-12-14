import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  
  private _personajes: Personaje[] = [
    {
      nombre: "Willian",
      poder: 10000
    },
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 8000
    }
  ];

  get personajes(){
    return [...this._personajes];
  }

  constructor() {
    console.log( "Inicializando constructor ")
   }

   agregarPersonaje( personaje:Personaje){
     this._personajes.push(personaje);
   }
}

import { Component} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'  
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 8000
    }
  ];

  agregarNuevoPersonaje( argumento: Personaje){
    this.personajes.push(argumento);
  }

  constructor( private DbzService: DbzService){

  }
  
}

import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({ 
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  paises: Country[] = [];

  hayError:boolean = false;

  termino: string = '';

  constructor( private paisService: PaisService ) { }

  buscar(){
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais( this.termino )
      .subscribe( paises => {
        console.log( paises )
        this.paises=paises;
      }, (err) => {
        this.hayError = true;
        this.paises=[];
      });
  }
}

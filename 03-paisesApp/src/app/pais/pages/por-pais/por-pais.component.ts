import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({ 
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  hayError:boolean = false;

  termino: string = '';

  constructor( private paisService: PaisService ) { }

  buscar(){
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais( this.termino )
      .subscribe( resp => {
        console.log( resp )
      }, (err) => {
        this.hayError = true;
      });
  }
}

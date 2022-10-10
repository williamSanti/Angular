import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs( query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes( query )){      
      this._historial.splice(0,10);
      this._historial.unshift(query);
    }

    console.log(this._historial);
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ='Fm2uHH4HHizQiB2ZfxVjk1wHjUsIAL4h'
  private _historial: string[] = [];

  //TODO: Cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }  

  constructor( private http: HttpClient ) { }

  buscarGifs( query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes( query )){       
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);  
      
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Fm2uHH4HHizQiB2ZfxVjk1wHjUsIAL4h&q=dragon${ query }&limit=10`)
        .subscribe( (resp: SearchGifsResponse) => {
          console.log( resp.data)
          this.resultados = resp.data;          
        })   
  }

}

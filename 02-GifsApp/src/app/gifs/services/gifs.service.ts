import { HttpClient, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ='Fm2uHH4HHizQiB2ZfxVjk1wHjUsIAL4h'
  private servicioUrl: string ='https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];

  //TODO: Cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }  

  constructor( private http: HttpClient ) {
    this._historial = JSON.parse( localStorage.getItem('hisSidebar')!) || [];
    this.resultados = JSON.parse( localStorage.getItem('hisImagenes')!) || [];
   }

  buscarGifs( query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes( query )){       
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10); 
      
      localStorage.setItem('hisSidebar', JSON.stringify( this._historial ));      
    }

    const params = new HttpParams()
            .set('apikey', this.apiKey)
            .set('limit', 10)
            .set('q', query)


    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params: params})
        .subscribe( (resp: SearchGifsResponse) => {
          //console.log( resp.data)
          this.resultados = resp.data;         

          localStorage.setItem( 'hisImagenes', JSON.stringify( this.resultados ));
        })   
  }

}

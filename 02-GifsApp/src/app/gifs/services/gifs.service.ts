import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ='Fm2uHH4HHizQiB2ZfxVjk1wHjUsIAL4h'

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }  

  constructor( private http: HttpClient ) { }

  buscarGifs( query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes( query )){      
      this._historial.splice(0,10);
      this._historial.unshift(query);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=Fm2uHH4HHizQiB2ZfxVjk1wHjUsIAL4h&q=dragon ball z&limit=10')
        .subscribe( (resp: any) => {
          console.log(resp.data);
        })

  }



}

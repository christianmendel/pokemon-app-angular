import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url:string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  public listarPokemons():Observable<any>{
    return this.http.get(this.url + '/?limit=30').pipe(res => res)
  }

  public listarPokemonDetalhe(id: number):Observable<any>{
    return this.http.get(this.url + `/${id}`).pipe(res => res)
  }
}

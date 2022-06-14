import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlImg: string = 'https://cdn.traction.one/pokedex/pokemon';

  constructor(private http: HttpClient) {}

  public listarPokemons(): Observable<any> {
    return this.http.get(this.url + '/?offset=30&limit=30').pipe((res) => res);
  }

  public listarPokemon(id: number): Observable<any> {
    return this.http.get(this.url + `/${id}`).pipe((res) => res);
  }

  public listarPokemonImg(id: number): Observable<any> {
    return this.http.get(this.urlImg + `/${id}.png`).pipe((res) => res);
  }
}

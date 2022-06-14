import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public pokemons: any = [];
  public pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.listarPokemons()
  }

  public listarPokemons() {
    return this.pokemonService.listarPokemons().subscribe((res) => {
      return (this.pokemons = res.results);
    });
  }

  public mostrarDetalhes(id:number) {
    return this.pokemonService.listarPokemon(id).subscribe((res) => {
      return (this.pokemon = res);
    });
  }

  public mostrarPokemonImg(id:number){
    return this.pokemonService.listarPokemonImg(id).subscribe((res) => {
      return res
    });
  }
}

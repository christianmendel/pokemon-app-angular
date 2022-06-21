import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public pokemons: any = [];
  public pokemon: any;
  public detail:boolean = false;


  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.listarPokemons()
  }

  public listarPokemons() {
    return this.pokemonService.listarPokemons().subscribe((res) => {
      return (this.pokemons = res.results);
    });
  }

  public mostrarDetalhes(id:number) {
    this.router.navigate([`pokemon/${id}`])
  }

  public mostrarPokemonImg(id:number){
    return `https://cdn.traction.one/pokedex/pokemon/${id}.png`
  }
}

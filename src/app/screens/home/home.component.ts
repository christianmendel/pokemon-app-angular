import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemons: any = []


  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.listarPokemons()
  }

  public listarPokemons(){
    this.pokemonService.listarPokemons().subscribe(res=>{
      console.log(res)
      return this.pokemons = res
    })
  }

  public listarImgPokemon(id: number){
    return `https://cdn.traction.one/pokedex/pokemon/${id}.png`
  }


  public mostrarDetalhes(id:number){
    return this.router.navigate([`pokemon/${id}`])
  }
}

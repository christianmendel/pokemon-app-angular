import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon-detalhes.component.css']
})
export class PokemonDetalhesComponent implements OnInit {
  
  public pokemons: any = [];
  public pokemon: any;
  public pokemonImg: any;
  


  constructor(private pokemonService: PokemonService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let paramId:any
    this.activateRoute.params.subscribe(res=>{
      paramId = res
    })

    this.pokemon = this.mostrarDetalhes(paramId.id)
    this.pokemonImg = this.mostrarPokemonImg(paramId.id)
  }

  public mostrarDetalhes(id:number) {
    return this.pokemonService.listarPokemon(id).subscribe((res) => {
      return (this.pokemon = res);
    });
  }

  public mostrarPokemonImg(id:number){
    return `https://cdn.traction.one/pokedex/pokemon/${id}.png`
  }

}

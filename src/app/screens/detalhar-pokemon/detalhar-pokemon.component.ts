import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-detalhar-pokemon',
  templateUrl: './detalhar-pokemon.component.html',
  styleUrls: ['./detalhar-pokemon.component.css']
})
export class DetalharPokemonComponent implements OnInit {
  public pokemonImg: any
  public pokemon: any

  constructor(private service: PokemonService, private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let paramId:any

    this.activatedRoute.params.subscribe(res=>{
      paramId = res
    })

   this.pokemonImg =  this.mostrarImgPokemon(paramId.id)
   this.mostrarDetalhesPokemon(paramId.id)
  }

  public mostrarImgPokemon(id:number){
    return `https://cdn.traction.one/pokedex/pokemon/${id}.png`
  }

  public mostrarDetalhesPokemon(id:number){
    return this.service.listarPokemonDetalhe(id)
    .subscribe(res => this.pokemon = res)
  }

  public voltar(){
    return this.router.navigate([""])
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalharPokemonComponent } from './screens/detalhar-pokemon/detalhar-pokemon.component';
import { HomeComponent } from './screens/home/home.component';
import { SobreComponent } from './screens/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'pokemon/:id', component: DetalharPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

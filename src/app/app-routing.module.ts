import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { PokemonDetalhesComponent } from './screens/pokemon-detalhes/pokemon-detalhes.component';
import { SobreComponent } from './screens/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
    {path:'pokemon/:id', component:PokemonDetalhesComponent},
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

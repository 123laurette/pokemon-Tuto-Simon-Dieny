import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/pokemons", pathMatch: "full"},
  { path: "**", component: PageNotFoundComponent }
];

//les routes sont lues du haut vers le bas, donc il faut déclarer en 1er les routes les plus spécifiques, donc terminer par la route par défault et ensuite la page d'erreur

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

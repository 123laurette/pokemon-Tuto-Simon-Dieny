import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

/*@Injectable({
  providedIn: 'root'     permet de rendre disponible le service à tout le projet et pas uniquement au dossier pokemon
})*/
//pour mettre se service uniquement pour le module pokemon, supprimer le providedIn: "root" et ajouter dans le fichier pokemon.module.ts, la ligne providers: [PokemonService]


@Injectable()
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy"
    ];
  }
}

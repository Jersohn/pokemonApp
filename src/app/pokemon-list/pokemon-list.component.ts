import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  PokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor(private router: Router) {}

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.PokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      this.router.navigate(['/pokemon-details', pokemon.id]);
      this.pokemonSelected = pokemon;
    }
  }
}

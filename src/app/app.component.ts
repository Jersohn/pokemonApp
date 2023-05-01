import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  PokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  ngOnInit(): void {
    // console.table(this.PokemonList);
    // this.selectPokemonName(this.PokemonList[0]);
  }
  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.PokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      console.log(`vous avez clické sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez clické sur un pokemon inexistant`);
      this.pokemonSelected = pokemon;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  PokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon | undefined; // définir la propriété pokemon

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      const pokemonSelected: Pokemon | undefined = this.PokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
      this.pokemon = pokemonSelected;
    }
  }
  goBack() {
    this.router.navigate(['/pokemons']); // Naviguer vers la liste de pokémons
  }
}

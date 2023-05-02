import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
 */
@Pipe({ name: 'pokemonTypeColor' })
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Feu':
        color = 'bg-danger text-white';
        break;
      case 'Eau':
        color = 'bg-primary text-white';
        break;
      case 'Plante':
        color = 'bg-success text-white';
        break;
      case 'Insecte':
        color = 'bg-success text-white';
        break;
      case 'Normal':
        color = 'bg-secondary text-white';
        break;
      case 'Vol':
        color = 'bg-info text-white';
        break;
      case 'Poison':
        color = 'bg-warning text-white';
        break;
      case 'Fée':
        color = 'bg-success text-white';
        break;
      case 'Psy':
        color = 'bg-deep-purple text-white';
        break;
      case 'Electrik':
        color = 'bg-primary text-white';
        break;
      case 'Combat':
        color = 'bg-deep-orange text-white';
        break;
      default:
        color = 'bg-secondary text-white';
        break;
    }

    return 'badge rounded-pill ' + color;
  }
}

import { Component } from '@angular/core';
import { Pokemon, PokemonEvent } from '../models/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonListItem],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {
  lastActionMessage: string = 'None';

  pokemonList: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', primaryType: 'Grass', hp: 45, description: 'A strange seed was planted on its back at birth.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, name: 'Charmander', primaryType: 'Fire', hp: 39, description: 'The flame at the tip of its tail indicates its emotions.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'Squirtle', primaryType: 'Water', hp: 44, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 25, name: 'Pikachu', primaryType: 'Electric', hp: 35, description: 'Stores electricity inside the pouches in its cheeks.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { id: 54, name: 'Psyduck', primaryType: 'Water', hp: 50, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png' },
    { id: 133, name: 'Eevee', primaryType: 'Normal', hp: 55, description: 'Its genetic code is unstable, allowing for multiple evolutions.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' }
  ];

  handleItemAction(event: PokemonEvent): void {
    this.lastActionMessage = `Pokemon #${event.id} had action: '${event.action}'`;
  }
}
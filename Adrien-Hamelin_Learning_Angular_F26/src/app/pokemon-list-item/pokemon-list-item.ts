import { Component, input, output } from '@angular/core';
import { Pokemon, PokemonEvent } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  imports: [],
  templateUrl: './pokemon-list-item.html',
  styleUrl: './pokemon-list-item.css'
})
export class PokemonListItem {
  item = input.required<Pokemon>();
  itemAction = output<PokemonEvent>();

  todayDate: string = new Date().toLocaleDateString();

  onSelect(): void {
    this.itemAction.emit({
      id: this.item().id,
      action: 'opened'
    });
  }

  onFavorite(event: MouseEvent): void {
    event.stopPropagation();
    this.itemAction.emit({
      id: this.item().id,
      action: 'favourited'
    });
  }
}
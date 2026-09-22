import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Adrien-Hamelin_Learning_Angular_F26');

  // Assignment 1 properties
  studentName: string = 'Adrien Hamelin';
  courseTitle: string = 'MAD 307 Javascript Frameworks';

  // Assignment 2: Initialized Pokemon array
  pokemonList: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', primaryType: 'Grass', hp: 45, description: 'A strange seed was planted on its back at birth.' },
    { id: 4, name: 'Charmander', primaryType: 'Fire', hp: 39, description: 'The flame at the tip of its tail indicates its emotions.' },
    { id: 7, name: 'Squirtle', primaryType: 'Water', hp: 44 },
    { id: 25, name: 'Pikachu', primaryType: 'Electric', hp: 35, description: 'Stores electricity inside the pouches in its cheeks.' },
    { id: 54, name: 'Psyduck', primaryType: 'Water', hp: 50 },
    { id: 133, name: 'Eevee', primaryType: 'Normal', hp: 55, description: 'Its genetic code is unstable, allowing for multiple evolutions.' }
  ];
}
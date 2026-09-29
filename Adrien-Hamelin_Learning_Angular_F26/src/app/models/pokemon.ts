export type PokemonType = 'Fire' | 'Water' | 'Grass' | 'Electric' | 'Psychic' | 'Normal';

export interface Pokemon {
  id: number;
  name: string;
  primaryType: PokemonType; // Union type
  hp: number;
  description?: string;     // Optional property
  imageUrl?: string;
}
export interface PokemonEvent {
  id: number;
  action: 'opened' | 'favourited';
}
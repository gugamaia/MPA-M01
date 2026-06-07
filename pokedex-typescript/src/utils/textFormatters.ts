import { PokemonResumo } from "../models/Pokemon";

export function formatarPokemon(pokemon: PokemonResumo): string {
  return (
    `#${pokemon.id} - ${pokemon.nome.toUpperCase()} | ` +
    `Tipos: ${pokemon.tipos.join(", ")} | ` +
    `Altura: ${pokemon.altura} | Peso: ${pokemon.peso} | ` +
    `HP: ${pokemon.hp} | ATK: ${pokemon.ataque} | DEF: ${pokemon.defesa}`
  );
}

export function formatarTitulo(texto: string): string {
  return `\n===== ${texto.toUpperCase()} =====\n`;
}

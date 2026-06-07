// Interface para o retorno bruto da PokeAPI
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

// Interface do Pokémon simplificado usado internamente
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
  hp: number;
  ataque: number;
  defesa: number;
}

// Classe de catálogo com modificadores de acesso
export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);
    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }
    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }
    this.pokemons.forEach((pokemon) => {
      console.log(
        `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
      );
    });
  }

  remover(id: number): void {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);
    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }
    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }

  obterTodos(): PokemonResumo[] {
    return this.pokemons;
  }

  pesoTotal(): number {
    return this.pokemons.reduce((acc, p) => acc + p.peso, 0);
  }

  todosTemNome(): boolean {
    return this.pokemons.every((p) => p.nome.length > 0);
  }
}

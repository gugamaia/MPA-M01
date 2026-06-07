import { CatalogoPokemon } from "../models/Pokemon";
import { buscarPokemon } from "../services/PokeApiService";
import { salvarBox } from "../services/BoxService";
import { formatarTitulo } from "../utils/textFormatters";

export class TerminalController {
  private catalogo: CatalogoPokemon;

  constructor(catalogo: CatalogoPokemon) {
    this.catalogo = catalogo;
  }

  async buscarEAdicionar(nomeOuId: string): Promise<void> {
    const pokemon = await buscarPokemon(nomeOuId);
    if (pokemon !== null) {
      this.catalogo.adicionar(pokemon);
    }
  }

  listarCatalogo(): void {
    console.log(formatarTitulo("Catálogo Atual"));
    this.catalogo.listar();
  }

  removerPokemon(id: number): void {
    this.catalogo.remover(id);
  }

  async salvarCatalogo(): Promise<void> {
    await salvarBox(this.catalogo.obterTodos());
  }

  exibirEstatisticas(): void {
    const todos = this.catalogo.obterTodos();
    const pesoTotal = this.catalogo.pesoTotal();
    console.log(formatarTitulo("Estatísticas"));
    console.log(`Total de Pokémon: ${todos.length}`);
    console.log(`Peso total do time: ${pesoTotal}`);
    console.log(`Todos têm nome: ${this.catalogo.todosTemNome()}`);
  }
}

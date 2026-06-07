import { CatalogoPokemon } from "./models/Pokemon";
import { TerminalController } from "./controllers/TerminalController";

async function main(): Promise<void> {
  console.log("==============================");
  console.log("   POKÉDEX TYPESCRIPT LITE    ");
  console.log("==============================\n");

  const catalogo = new CatalogoPokemon();
  const controller = new TerminalController(catalogo);

  // RF04 + RF06 — busca e mapeia Pokémon da API
  await controller.buscarEAdicionar("pikachu");
  await controller.buscarEAdicionar("charmander");
  await controller.buscarEAdicionar("bulbasaur");

  // RF05 — testa Pokémon inexistente
  await controller.buscarEAdicionar("pokemon-inexistente");

  // RF08 — testa duplicidade
  await controller.buscarEAdicionar("pikachu");

  // RF09 — lista catálogo
  controller.listarCatalogo();

  // Estatísticas extras com reduce e every
  controller.exibirEstatisticas();

  // RF10 — remove Pokémon pelo ID
  controller.removerPokemon(25); // remove pikachu

  // Lista após remoção
  controller.listarCatalogo();

  // Salva catálogo em pc_box.json (BoxService / fs/promises)
  await controller.salvarCatalogo();
}

main();

import { promises as fs } from "node:fs";
import { PokemonResumo } from "../models/Pokemon";
import { LocalBoxError } from "../models/CustomErrors";

const CAMINHO_BOX = "./pc_box.json";

export async function salvarBox(pokemons: PokemonResumo[]): Promise<void> {
  try {
    await fs.writeFile(CAMINHO_BOX, JSON.stringify(pokemons, null, 2));
    console.log("[OK] Catálogo salvo em pc_box.json");
  } catch (erro) {
    throw new LocalBoxError("Erro ao salvar o arquivo pc_box.json");
  }
}

export async function carregarBox(): Promise<PokemonResumo[]> {
  try {
    const conteudo = await fs.readFile(CAMINHO_BOX, "utf-8");
    return JSON.parse(conteudo) as PokemonResumo[];
  } catch {
    return [];
  }
}

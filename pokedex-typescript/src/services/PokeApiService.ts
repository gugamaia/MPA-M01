import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";
import { APIError } from "../models/CustomErrors";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function buscarPokemon(
  nomeOuId: string
): Promise<PokemonResumo | null> {
  const url = `${BASE_URL}/${nomeOuId.toLowerCase()}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new APIError(`Pokémon não encontrado: ${nomeOuId}`);
    }

    const dados: PokemonApiResponse = await resposta.json();

    // map para extrair tipos
    const tipos = dados.types.map((item) => item.type.name);

    // find para localizar stats específicos
    const hpStat = dados.stats.find((s) => s.stat.name === "hp");
    const atkStat = dados.stats.find((s) => s.stat.name === "attack");
    const defStat = dados.stats.find((s) => s.stat.name === "defense");

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos,
      altura: dados.height,
      peso: dados.weight,
      hp: hpStat?.base_stat ?? 0,
      ataque: atkStat?.base_stat ?? 0,
      defesa: defStat?.base_stat ?? 0,
    };

    console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
    return pokemon;
  } catch (erro) {
    if (erro instanceof APIError) {
      console.log(`[ERRO] ${erro.message}`);
    } else {
      console.log(`[ERRO] Não foi possível buscar o Pokémon.`);
    }
    return null;
  }
}

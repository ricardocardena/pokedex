import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { apiRoot } from "../constants";
import type { PokemonDetails } from "../types/pokemon";

type UsePokemonDetailsOptions = {
  pokemonName: string;
  enable?: boolean;
};

const fetchPokemonDetails = async (opt: UsePokemonDetailsOptions) => {
  const { data } = await axios.get(`${apiRoot}/pokemon/${opt.pokemonName}`);
  return data;
};

export const usePokemonDetails = (
  opt: UsePokemonDetailsOptions
): UseQueryResult<PokemonDetails> => {
  const { pokemonName, enable = true } = opt;
  return useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: () => fetchPokemonDetails(opt),
    enabled: enable,
  });
};

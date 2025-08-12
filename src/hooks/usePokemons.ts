import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { apiRoot } from "../constants";
import type { Pokemon } from "../types/pokemon";

type UsePokemonsOptions = {
  page?: number;
  limit?: number;
  offset?: number;
};

type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

const fetchPokemons = async (opt: Omit<UsePokemonsOptions, "page">) => {
  const { limit, offset } = opt;
  const { data } = await axios.get(
    `${apiRoot}/pokemon?limit=${limit}&offset=${offset}`
  );
  return data;
};

export const usePokemons = (
  opt: UsePokemonsOptions
): UseQueryResult<PokemonListResponse> => {
  const { page, ...rest } = opt;
  return useQuery({
    queryKey: ["pokemons", page],
    queryFn: () => fetchPokemons(rest),
  });
};

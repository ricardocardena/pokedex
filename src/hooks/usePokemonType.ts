import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { apiRoot } from "../constants";

type UsePokemonTypeOptions = {
  type: string;
};

type PokemonTypeResponse = {
  id: number;
  sprites: {
    "generation-viii": {
      "sword-shield": {
        name_icon: string;
      };
    };
  };
};

const fetchPokemonType = async (opt: Omit<UsePokemonTypeOptions, "page">) => {
  const { type } = opt;
  const { data } = await axios.get(`${apiRoot}/type/${type}`);
  return data;
};

export const usePokemonType = (
  opt: UsePokemonTypeOptions
): UseQueryResult<PokemonTypeResponse> => {
  return useQuery({
    queryKey: ["pokemon-type", opt.type],
    queryFn: () => fetchPokemonType(opt),
  });
};

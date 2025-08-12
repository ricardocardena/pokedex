export type Pokemon = {
  name: string;
  url: string;
};

type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: PokemonStats[];
  types: PokemonType[];
  cries: {
    latest: string;
    legacy: string;
  };
};

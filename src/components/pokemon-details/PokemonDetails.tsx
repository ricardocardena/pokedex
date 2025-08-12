import { usePokemonDetails } from "../../hooks/usePokemonDetails";
import { pokemonDetailsClassNames } from "./PokemonDetailsStyles";
import { PokemonInfo } from "./PokemonInfo";

type PokemonDetailsProps = {
    selectedPokemon?: string;
}

export const PokemonDetails = (props: PokemonDetailsProps) => {
    const { selectedPokemon = "" } = props
    const { data } = usePokemonDetails({
        pokemonName: selectedPokemon,
        enable: !!selectedPokemon
    })
    const classes = pokemonDetailsClassNames(!!data)
    return <div className={classes.container}>
        {data && <PokemonInfo pokemonData={data} />}
    </div>
}
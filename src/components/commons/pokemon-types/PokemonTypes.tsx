import type { PokemonDetails } from "../../../types/pokemon"
import { TypeBadge } from "./TypeBadge";

type PokemonTypesProps = {
    pokemonTypes: PokemonDetails["types"];
}

export const PokemonTypes = (props: PokemonTypesProps) => {
    const { pokemonTypes } = props
    return <div className="w-full flex gap-2 justify-center">
        {pokemonTypes.map(type => (<TypeBadge {...type} />))}
    </div>
}
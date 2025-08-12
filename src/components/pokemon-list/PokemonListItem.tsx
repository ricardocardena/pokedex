import { usePokemonDetails } from "../../hooks/usePokemonDetails"
import type { Pokemon } from "../../types/pokemon"
import { PokemonTypes } from "../commons/pokemon-types/PokemonTypes";

export type PokemonListItemProps = {
    pokemon: Pokemon;
    onSelect: (pokemonName: string) => void;
}

export const PokemonListItem = (props: PokemonListItemProps) => {
    const { pokemon, onSelect } = props
    const { data } = usePokemonDetails({ pokemonName: pokemon.name })
    const { sprites } = data || {}

    const handleSelect = () => {
        onSelect(pokemon.name)
    }
    return <li onClick={handleSelect} className="p-2 hover:bg-cyan-500 cursor-pointer flex flex-col items-center">
        <img className="size-24" src={sprites?.front_default} />
        <span className="text-white text-center capitalize">{pokemon.name}</span>
        <div className="px-1">
            <PokemonTypes pokemonTypes={data?.types ?? []} />
        </div>
    </li>
}

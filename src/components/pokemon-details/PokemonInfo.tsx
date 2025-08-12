import type { PokemonDetails } from "../../types/pokemon"
import { PokemonTypes } from "../commons/pokemon-types/PokemonTypes"

type PokemonInfoProps = {
    pokemonData: PokemonDetails
}

export const PokemonInfo = (props: PokemonInfoProps) => {
    const { pokemonData } = props
    const { sprites, types, stats } = pokemonData
    return <>
        <img className="size-40 block m-auto" src={sprites.front_default} />
        <div className="mb-10">
            <p className="font-bold capitalize text-center">{pokemonData.name} #{pokemonData.id}</p>
            <PokemonTypes pokemonTypes={types} />
        </div>
        <p className="font-bold">Stats:</p>
        <div className="grid grid-cols-2 md:grid-cols-3">
            {stats.map((stat => (<span className="capitalize">{stat.stat.name}: {stat.base_stat}</span>)))}
        </div>
    </>
}
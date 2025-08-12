import { useState } from "react"
import { PokemonList } from "../components/pokemon-list/PokemonList"
import { usePokemons } from "../hooks/usePokemons"
import { PokemonDetails } from "../components/pokemon-details/PokemonDetails";

type Pagination = {
    page: number;
    limit: number;
    offset: number;
}

export const PokedexPage = () => {
    const [page, setPage] = useState(0)
    const [limit] = useState(10)
    const [offset, setOffset] = useState(0)
    const [selectedPokemon, setSelectedPokemon] = useState("")

    const { data, isLoading } = usePokemons({ page, limit, offset })

    const handleSelectPokemon = (pokemonName: string) => {
        setSelectedPokemon(pokemonName)
    }

    const handleNext = () => {
        if (data?.next) {
            setPage(prev => prev + 1)
            setOffset(prev => prev + limit)
        }
    }

    const handlePrev = () => {
        if (data?.previous) {
            setPage(prev => prev - 1)
            setOffset(prev => prev - limit)
        }
    }

    return <div className="flex justify-center mt-5 w-full">
        <div className="bg-red-800 p-10 rounded w-full md:max-w-3xl">
            <h1 className="text-center text-white text-xl">Pokedex</h1>
            <PokemonDetails selectedPokemon={selectedPokemon} />
            <PokemonList
                pokemons={data?.results}
                onSelect={handleSelectPokemon}
                onPrev={handlePrev}
                disablePrevButton={page === 0}
                onNext={handleNext}
                disableNextButton={Boolean(!data?.next)}
            />
        </div>
    </div>
}


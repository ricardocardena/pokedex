import type { Pokemon } from "../../types/pokemon"
import { PokemonListItem, type PokemonListItemProps } from "./PokemonListItem"

type PokemonListProps = {
    pokemons?: Pokemon[];
    onSelect: PokemonListItemProps["onSelect"];
    onPrev: () => void;
    disablePrevButton: boolean;
    onNext: () => void;
    disableNextButton: boolean;
}

export const PokemonList = (props: PokemonListProps) => {
    const { pokemons, onSelect, onPrev, disablePrevButton, onNext, disableNextButton } = props
    return <div className="w-full">
        <div className="max-h-[60vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemons?.map(pokemon => <PokemonListItem key={pokemon.name} pokemon={pokemon} onSelect={onSelect} />)}
        </div>
        <div className="flex justify-between mt-4">
            <button
                onClick={onPrev}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                disabled={disablePrevButton}
            >
                Prev
            </button>
            <button
                onClick={onNext}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                disabled={disableNextButton}
            >
                Next
            </button>
        </div>
    </div>
}

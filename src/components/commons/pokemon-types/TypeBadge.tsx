import { usePokemonType } from "../../../hooks/usePokemonType"
import type { PokemonType } from "../../../types/pokemon"

export const TypeBadge = (props: PokemonType) => {
    const { type } = props
    const { data, isLoading } = usePokemonType({ type: type.name })

    if (!data || isLoading) return;
    const badgeIcon = data.sprites["generation-viii"]["sword-shield"].name_icon
    return <img className="w-20 rounded" src={badgeIcon} data-testid="pokemon-type-badge" />
}
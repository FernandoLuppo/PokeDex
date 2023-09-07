import * as S from "./pokemonStats.styles"
import { CardStats } from "./components"
import type { IPokemon } from "../../../../shared/types"

interface IProps {
  pokemonStats: IPokemon[]
}

export const PokemonStats: React.FC<IProps> = ({ pokemonStats }) => {
  return (
    <S.ContainerPokemonStats>
      <CardStats pokemonStats={pokemonStats} />
    </S.ContainerPokemonStats>
  )
}

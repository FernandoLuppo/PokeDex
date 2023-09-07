import * as S from "./pokemonStats.styles"
import type { IPokemon } from "../../../../shared/types"
import { CardStats } from "./components"

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

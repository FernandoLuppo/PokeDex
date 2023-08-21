import * as S from "./pokeInfos.styles"
import type { IPokemon } from "../../../../shared/types"
import { PokeDescription, PokeSprit, PokeStats } from "./components"

export const PokeInfos: React.FC<IPokemon> = props => {
  return (
    <S.ContainerPokeInfos>
      <PokeDescription
        genericInfos={props.genericInfos}
        description={props.description}
      />
      <PokeSprit genericInfos={props.genericInfos} types={props.types} />
      <PokeStats types={props.types} pokemonStats={props.pokemonStats} />
    </S.ContainerPokeInfos>
  )
}

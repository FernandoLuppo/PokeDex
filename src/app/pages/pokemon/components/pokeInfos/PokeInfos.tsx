import * as S from "./pokeInfos.styles"
import type { IPokemon } from "../../../../shared/types"
import { PokeDescription, PokeSprit, PokeStats } from "./components"

export const PokeInfos: React.FC<IPokemon> = ({ pokemon }) => {
  return (
    <S.ContainerPokeInfos>
      <PokeDescription pokemon={pokemon} />
      <PokeSprit pokemon={pokemon} />
      <PokeStats pokemon={pokemon} />
    </S.ContainerPokeInfos>
  )
}

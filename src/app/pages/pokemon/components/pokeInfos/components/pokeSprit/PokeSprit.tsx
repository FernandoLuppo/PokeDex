import * as S from "./pokeSprit.styles"
import { Button, PokeCard } from "../../../../../../shared/components"
import type { IPokemon } from "../../../../../../shared/types"

export const PokeSprit: React.FC<IPokemon> = props => {
  return (
    <S.ContainerPokeSprit>
      <PokeCard data={props} />
      <Button isbig={undefined} text="Add to team" />
    </S.ContainerPokeSprit>
  )
}

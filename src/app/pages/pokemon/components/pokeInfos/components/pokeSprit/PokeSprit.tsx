import * as S from "./pokeSprit.styles"
import { Button, PokeCard } from "../../../../../../shared/components"
import type { IPokemon, IPokemonCard } from "../../../../../../shared/types"

export const PokeSprit: React.FC<IPokemon> = props => {
  const data: IPokemonCard = props.pokemon
  return (
    <S.ContainerPokeSprit>
      <PokeCard data={data} />
      <Button isbig={undefined} text="Add to team" />
    </S.ContainerPokeSprit>
  )
}

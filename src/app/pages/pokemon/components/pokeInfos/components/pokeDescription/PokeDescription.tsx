import * as S from "./pokeDescription.styles"
import type { IPokemon } from "../../../../../../shared/types"

export const PokeDescription: React.FC<IPokemon> = props => {
  const name = props.pokemon.genericInfos.name
  const id = props.pokemon.genericInfos.id
  const height = props.pokemon.genericInfos.height
  const weight = props.pokemon.genericInfos.weight
  const description = props.pokemon.description

  return (
    <S.ContainerPokeDescription>
      <h1>
        #{id} {name}
      </h1>

      <S.ContainerInfos>
        <ul>
          <li>
            <h3>Height: </h3>
            {height}
          </li>
          <li>
            <h3>Weight: </h3>
            {weight}
          </li>
          <li>
            <h3>About: </h3>
            {description}
          </li>
        </ul>
      </S.ContainerInfos>
    </S.ContainerPokeDescription>
  )
}

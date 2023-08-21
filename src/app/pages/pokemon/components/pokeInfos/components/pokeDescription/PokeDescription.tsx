import * as S from "./pokeDescription.styles"
import type { IPokemon } from "../../../../../../shared/types"

export const PokeDescription: React.FC<IPokemon> = ({
  description,
  genericInfos
}) => {
  return (
    <S.ContainerPokeDescription>
      <h1>
        #{genericInfos?.id} {genericInfos?.name}
      </h1>

      <S.ContainerInfos>
        <ul>
          <li>
            <h3>Height: </h3>
            {genericInfos?.height}
          </li>
          <li>
            <h3>Weight: </h3>
            {genericInfos?.weight}
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

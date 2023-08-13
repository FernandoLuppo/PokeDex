import * as S from "./errorMessage.styles"
import sadPokemon from "../../../../../shared/image/sadPokemon.gif"

export const ErrorMessage: React.FC = () => {
  return (
    <S.ContainerErrorMessage>
      <h3>Pokemon not found</h3>
      <img src={sadPokemon} alt="" />
    </S.ContainerErrorMessage>
  )
}

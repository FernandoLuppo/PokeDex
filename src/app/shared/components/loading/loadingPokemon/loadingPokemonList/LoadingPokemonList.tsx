import * as S from "./loadingPokemonList.styles"
import loadingImg from "../../../../image/pokemonLoading.gif"

export const LoadingPokemonList: React.FC = () => {
  return (
    <S.LoadingImg>
      <img src={loadingImg} alt="List loading" />
    </S.LoadingImg>
  )
}

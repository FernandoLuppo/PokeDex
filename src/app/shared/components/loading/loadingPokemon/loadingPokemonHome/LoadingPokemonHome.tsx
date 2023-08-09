import * as S from "./loadingPokemonHome.styles"
import loadingGif from "../../../../image/loading.gif"

export const LoadingPokemonHome: React.FC = () => {
  return (
    <S.ContainerLoading>
      <img src={loadingGif} alt="Loading Gif" />
    </S.ContainerLoading>
  )
}

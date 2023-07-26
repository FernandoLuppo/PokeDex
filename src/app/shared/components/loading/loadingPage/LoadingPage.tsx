import * as S from "./loadingPage.styles"
import loadingGif from "../../../image/loading.gif"

export const LoadingPage: React.FC = () => {
  return (
    <S.ContainerLoadingPage>
      <img src={loadingGif} alt="Loading Gif" />
    </S.ContainerLoadingPage>
  )
}

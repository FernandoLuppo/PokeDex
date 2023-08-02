import * as S from "./home.styles"
import { Header } from "../../shared/components"
import { SideBar } from "./components/sideBar/SideBar"

export const Home: React.FC = () => {
  return (
    <S.HomeContainer>
      {window.innerWidth > 900 && <SideBar />}

      <S.HomeColumn>
        <Header />
        <main></main>
      </S.HomeColumn>
    </S.HomeContainer>
  )
}

import * as S from "./home.styles"
import { Header, PokeCard } from "../../shared/components"
import { SideBar } from "./components/sideBar/SideBar"

export const Home: React.FC = () => {
  return (
    <S.HomeContainer>
      {window.innerWidth > 900 && <SideBar />}

      <S.HomeColumn>
        <Header />
        <S.ContainerPokemon>
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
        </S.ContainerPokemon>
      </S.HomeColumn>
    </S.HomeContainer>
  )
}

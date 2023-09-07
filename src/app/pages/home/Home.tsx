import * as S from "./home.styles"
import { HeaderHome } from "../../shared/components"
import { PokemonList } from "./components"
import { SideBar } from "./components/sideBar/SideBar"
import { SearchBar } from "../../shared/components/header/headerHome/components"

export const Home: React.FC = () => {
  return (
    <S.HomeContainer>
      {window.innerWidth > 900 && <SideBar />}

      <S.HomeColumn>
        <HeaderHome />
        {window.innerWidth < 900 && (
          <S.ContainerHomeSearchBar>
            <SearchBar />
          </S.ContainerHomeSearchBar>
        )}
        <PokemonList />
      </S.HomeColumn>
    </S.HomeContainer>
  )
}

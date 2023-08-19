import { PokeCard } from "../../../../shared/components"
import * as S from "./pokemonTeam.styles"
import type { IPokemon } from "../../../../shared/types"

interface IProps {
  team: IPokemon[]
  teamIsLoaded: boolean
}

export const PokemonTeam: React.FC<IProps> = ({ team, teamIsLoaded }) => {
  console.log("oi", teamIsLoaded)

  return (
    <S.ContainerPokemonTeam>
      {teamIsLoaded && team !== undefined && (
        <>
          <S.PokemonLine>
            <PokeCard data={team[0].pokemon} key={1} />
            <PokeCard data={team[1].pokemon} key={2} />
            <PokeCard data={team[2].pokemon} key={3} />
          </S.PokemonLine>

          <S.PokemonLine>
            <PokeCard data={team[3].pokemon} key={4} />
            <PokeCard data={team[4].pokemon} key={5} />
            <PokeCard data={team[5].pokemon} key={6} />
          </S.PokemonLine>
        </>
      )}
    </S.ContainerPokemonTeam>
  )
}

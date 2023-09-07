import * as S from "./pokemonTeam.styles"
import { PokeCard } from "../../../../shared/components"
import type { IPokemon } from "../../../../shared/types"

interface IProps {
  team: IPokemon[]
  teamIsLoaded: boolean
}

export const PokemonTeam: React.FC<IProps> = ({ team, teamIsLoaded }) => {
  return (
    <S.ContainerPokemonTeam>
      {teamIsLoaded && team !== undefined && (
        <>
          <S.PokemonLine>
            <PokeCard data={team[0]} key={1} />
            <PokeCard data={team[1]} key={2} />
            <PokeCard data={team[2]} key={3} />
          </S.PokemonLine>

          <S.PokemonLine>
            <PokeCard data={team[3]} key={4} />
            <PokeCard data={team[4]} key={5} />
            <PokeCard data={team[5]} key={6} />
          </S.PokemonLine>
        </>
      )}
    </S.ContainerPokemonTeam>
  )
}

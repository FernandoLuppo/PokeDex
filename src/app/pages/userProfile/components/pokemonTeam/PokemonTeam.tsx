import { useEffect, useState } from "react"
import { get } from "../../../../shared/service"
import { PokeCard } from "../../../../shared/components"
import * as S from "./pokemonTeam.styles"

interface ITeamPokemon {
  pokemon: {
    genericInfos: {
      name: string
      id: number
      sprit: string
    }
    types: [{ type: string }]
  }
}

export const PokemonTeam: React.FC = () => {
  const [team, setTeam] = useState<ITeamPokemon[]>()
  const [teamIsLoaded, setTeamIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    get("/pokemon/team")
      .then(userTeam => {
        const { data } = userTeam.data
        //  Fazer uma função aparte nessa parte do código
        if (data !== undefined) {
          const teamMembers = data.length
          if (teamMembers < 6) {
            const emptyPokemon: ITeamPokemon = {
              pokemon: {
                genericInfos: {
                  name: "",
                  id: 0,
                  sprit: ""
                },
                types: [{ type: "" }]
              }
            }

            const newTeam = [...data]
            for (let i = teamMembers; i < 6; i++) {
              newTeam.push(emptyPokemon)
            }

            // Retornar o newTeam

            setTeam(newTeam)
            setTeamIsLoaded(true)
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

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

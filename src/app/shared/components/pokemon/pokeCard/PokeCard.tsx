import * as S from "./pokeCard.styles"

interface IProps {
  data: [
    {
      type: [
        {
          type: string
        }
      ]
      name: string
      id: number
      sprit: string
    }
  ]
}

export const PokeCard: React.FC<IProps> = ({ data }) => {
  console.log(data)

  return (
    <>
      {data.map(pokemon => {
        return (
          <S.ContainerPokeCard key={pokemon.id}>
            <S.PokeId>#{pokemon.id}</S.PokeId>
            <div>
              <S.PokemonSprit src={pokemon.sprit} alt="" />
            </div>
            <S.PokeInfos>
              <p>{pokemon.name}</p>
              <div>
                {pokemon.type.map(pokemon => {
                  return (
                    <S.PokeType key={pokemon.type} type={pokemon.type}>
                      {pokemon.type}
                    </S.PokeType>
                  )
                })}
              </div>
            </S.PokeInfos>
          </S.ContainerPokeCard>
        )
      })}
    </>
  )
}

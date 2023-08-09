import * as S from "./pokeCard.styles"

interface IPokemon {
  type: [{ type: string }]
  name: string
  id: number
  sprit: string
}

interface IProps {
  data: IPokemon
}

export const PokeCard: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <S.ContainerPokeCard key={data.id}>
        <S.PokeId>#{data.id}</S.PokeId>
        <div>
          <S.PokemonSprit src={data.sprit} alt="" />
        </div>
        <S.PokeInfos>
          <p>{data.name}</p>
          <div>
            {data.type.map(pokemon => {
              return (
                <S.PokeType key={pokemon.type} type={pokemon.type}>
                  {pokemon.type}
                </S.PokeType>
              )
            })}
          </div>
        </S.PokeInfos>
      </S.ContainerPokeCard>
    </>
  )
}

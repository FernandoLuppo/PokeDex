import * as S from "./pokeCard.styles"

export const PokeCard: React.FC = () => {
  return (
    <S.ContainerPokeCard>
      <S.PokeId>#1</S.PokeId>
      <div></div>
      <S.PokeInfos>
        <p>Pokemon</p>
        <div>
          <p>type1</p>
          <p>type2</p>
        </div>
      </S.PokeInfos>
    </S.ContainerPokeCard>
  )
}

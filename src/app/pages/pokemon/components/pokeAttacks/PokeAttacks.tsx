import * as S from "./pokeAttack"
import type { IPokemon } from "../../../../shared/types"

export const PokeAttacks: React.FC<IPokemon> = ({ pokemonMovie }) => {
  if (pokemonMovie !== undefined) {
    pokemonMovie.sort((a, b) => a.level - b.level)
  }

  return (
    <S.ContainerPokeAttacks>
      <table>
        <thead>
          <th colSpan={3}>Attack by Level</th>
        </thead>
        <tbody>
          <tr>
            <td>Level</td>
            <td>Attack</td>
            <td>Type</td>
          </tr>
          {pokemonMovie?.map(item => {
            return (
              <tr key={item.movie}>
                <td>{item.level}</td>
                <td>{item.movie}</td>
                <td>{item.type}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </S.ContainerPokeAttacks>
  )
}

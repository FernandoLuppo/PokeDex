import * as S from "./Filter.styles"
import { FilterData } from "./components/FilterData"

export const Filter: React.FC = () => {
  return (
    <S.ContainerFilter>
      <details>
        <summary>Generation</summary>
        <ul>
          <FilterData htmlFor="I" id="I" text="Generation I" />
          <FilterData htmlFor="II" id="II" text="Generation II" />
          <FilterData htmlFor="III" id="III" text="Generation III" />
          <FilterData htmlFor="IV" id="IV" text="Generation IV" />
          <FilterData htmlFor="V" id="V" text="Generation V" />
          <FilterData htmlFor="VI" id="VI" text="Generation VI" />
          <FilterData htmlFor="VII" id="VII" text="Generation VII" />
          <FilterData htmlFor="VII" id="VII" text="Generation VII" />
          <FilterData htmlFor="IX" id="IX" text="Generation IX" />
        </ul>
      </details>

      <details>
        <summary>Type</summary>
        <ul>
          <FilterData htmlFor="Normal" id="Normal" text="Normal" />
          <FilterData htmlFor="Fire" id="Fire" text="Fire" />
          <FilterData htmlFor="Water" id="Water" text="Water" />
          <FilterData htmlFor="Grass" id="Grass" text="Grass" />
          <FilterData htmlFor="Flying" id="Flying" text="Flying" />
          <FilterData htmlFor="Fighting" id="Fighting" text="Fighting" />
          <FilterData htmlFor="Poison" id="Poison" text="Poison" />
          <FilterData htmlFor="Electric" id="Electric" text="Electric" />
          <FilterData htmlFor="Ground" id="Ground" text="Ground" />
          <FilterData htmlFor="Rock" id="Rock" text="Rock" />
          <FilterData htmlFor="Psychic" id="Psychic" text="Psychic" />
          <FilterData htmlFor="Ice" id="Ice" text="Ice" />
          <FilterData htmlFor="Bug" id="Bug" text="Bug" />
          <FilterData htmlFor="Ghost" id="Ghost" text="Ghost" />
          <FilterData htmlFor="Steel" id="Steel" text="Steel" />
          <FilterData htmlFor="Dragon" id="Dragon" text="Dragon" />
          <FilterData htmlFor="Dark" id="Dark" text="Dark" />
          <FilterData htmlFor="Fairy" id="Fairy" text="Fairy" />
        </ul>
      </details>
    </S.ContainerFilter>
  )
}

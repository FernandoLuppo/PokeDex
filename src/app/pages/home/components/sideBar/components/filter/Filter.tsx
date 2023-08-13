import { useState } from "react"
import * as S from "./Filter.styles"
import { FilterData } from "./components/FilterData"

export const Filter: React.FC = () => {
  const [generationFilter, setGenerationFilter] = useState<string>("")
  const [typeFilter, setTypeFilter] = useState<string>("")

  return (
    <S.ContainerFilter>
      <details>
        <summary>Generation</summary>
        <ul>
          <FilterData
            htmlFor="Clean"
            id="Clean"
            text="Clean Filter"
            name="generation"
            onChange={() => {
              setGenerationFilter("")
            }}
          />
          <FilterData
            htmlFor="I"
            id="I"
            text="Generation I"
            name="generation"
            onChange={() => {
              setGenerationFilter("I")
            }}
          />
          <FilterData
            htmlFor="II"
            id="II"
            text="Generation II"
            name="generation"
            onChange={() => {
              setGenerationFilter("II")
            }}
          />
          <FilterData
            htmlFor="III"
            id="III"
            text="Generation III"
            name="generation"
            onChange={() => {
              setGenerationFilter("III")
            }}
          />
          <FilterData
            htmlFor="IV"
            id="IV"
            text="Generation IV"
            name="generation"
            onChange={() => {
              setGenerationFilter("IV")
            }}
          />
          <FilterData
            htmlFor="V"
            id="V"
            text="Generation V"
            name="generation"
            onChange={() => {
              setGenerationFilter("V")
            }}
          />
          <FilterData
            htmlFor="VI"
            id="VI"
            text="Generation VI"
            name="generation"
            onChange={() => {
              setGenerationFilter("VI")
            }}
          />
          <FilterData
            htmlFor="VII"
            id="VII"
            text="Generation VII"
            name="generation"
            onChange={() => {
              setGenerationFilter("VII")
            }}
          />
          <FilterData
            htmlFor="VIII"
            id="VIII"
            text="Generation VIII"
            name="generation"
            onChange={() => {
              setGenerationFilter("VIII")
            }}
          />
          <FilterData
            htmlFor="IX"
            id="IX"
            text="Generation IX"
            name="generation"
            onChange={() => {
              setGenerationFilter("IX")
            }}
          />
        </ul>
      </details>

      <details>
        <summary>Type</summary>
        <ul>
          <FilterData
            htmlFor="Clean"
            id="Clean"
            text="Clean Filter"
            checked={true}
            name="type"
            onChange={() => {
              setTypeFilter("")
            }}
          />
          <FilterData
            htmlFor="Normal"
            id="Normal"
            text="Normal"
            name="type"
            onChange={() => {
              setTypeFilter("normal")
            }}
          />
          <FilterData
            htmlFor="Fire"
            id="Fire"
            text="Fire"
            name="type"
            onChange={() => {
              setTypeFilter("fire")
            }}
          />
          <FilterData
            htmlFor="Water"
            id="Water"
            text="Water"
            name="type"
            onChange={() => {
              setTypeFilter("water")
            }}
          />
          <FilterData
            htmlFor="Grass"
            id="Grass"
            text="Grass"
            name="type"
            onChange={() => {
              setTypeFilter("grass")
            }}
          />
          <FilterData
            htmlFor="Flying"
            id="Flying"
            text="Flying"
            name="type"
            onChange={() => {
              setTypeFilter("flying")
            }}
          />
          <FilterData
            htmlFor="Fighting"
            id="Fighting"
            text="Fighting"
            name="type"
            onChange={() => {
              setTypeFilter("fighting")
            }}
          />
          <FilterData
            htmlFor="Poison"
            id="Poison"
            text="Poison"
            name="type"
            onChange={() => {
              setTypeFilter("poison")
            }}
          />
          <FilterData
            htmlFor="Electric"
            id="Electric"
            text="Electric"
            name="type"
            onChange={() => {
              setTypeFilter("electric")
            }}
          />
          <FilterData
            htmlFor="Ground"
            id="Ground"
            text="Ground"
            name="type"
            onChange={() => {
              setTypeFilter("ground")
            }}
          />
          <FilterData
            htmlFor="Rock"
            id="Rock"
            text="Rock"
            name="type"
            onChange={() => {
              setTypeFilter("rock")
            }}
          />
          <FilterData
            htmlFor="Psychic"
            id="Psychic"
            text="Psychic"
            name="type"
            onChange={() => {
              setTypeFilter("psychic")
            }}
          />
          <FilterData
            htmlFor="Ice"
            id="Ice"
            text="Ice"
            name="type"
            onChange={() => {
              setTypeFilter("ice")
            }}
          />
          <FilterData
            htmlFor="Bug"
            id="Bug"
            text="Bug"
            name="type"
            onChange={() => {
              setTypeFilter("bug")
            }}
          />
          <FilterData
            htmlFor="Ghost"
            id="Ghost"
            text="Ghost"
            name="type"
            onChange={() => {
              setTypeFilter("ghost")
            }}
          />
          <FilterData
            htmlFor="Steel"
            id="Steel"
            text="Steel"
            name="type"
            onChange={() => {
              setTypeFilter("steel")
            }}
          />
          <FilterData
            htmlFor="Dragon"
            id="Dragon"
            text="Dragon"
            name="type"
            onChange={() => {
              setTypeFilter("dragon")
            }}
          />
          <FilterData
            htmlFor="Dark"
            id="Dark"
            text="Dark"
            name="type"
            onChange={() => {
              setTypeFilter("dark")
            }}
          />
          <FilterData
            htmlFor="Fairy"
            id="Fairy"
            text="Fairy"
            name="type"
            onChange={() => {
              setTypeFilter("fairy")
            }}
          />
        </ul>
      </details>
    </S.ContainerFilter>
  )
}

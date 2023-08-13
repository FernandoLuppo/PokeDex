import { useCallback, useContext, useState } from "react"
import searchIcon from "../../../../image/search.png"
import { wordsAndNumbers } from "../../../../service"
import * as S from "./searchBar.styles"
import { PokemonFilterContext } from "../../../../context"

export const SearchBar: React.FC = ({ ...props }) => {
  const mask = (e: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value
    wordsAndNumbers(inputValue)
  }

  const [inputValue, setInputValue] = useState<string>("")
  const { searchFilterFunction } = useContext(PokemonFilterContext)

  const handleSearch = useCallback(() => {
    searchFilterFunction(inputValue)
  }, [inputValue])

  return (
    <S.SearchBar role="menubar">
      <input
        {...props}
        onKeyUp={mask}
        placeholder="Search by Name or ID"
        onChange={e => {
          setInputValue(e.target.value)
        }}
        onKeyDownCapture={e => {
          if (e.key === "Enter") {
            handleSearch()
          }
        }}
      />
      <S.SearchButton onClick={handleSearch}>
        <img src={searchIcon} alt="Search Icon" />
      </S.SearchButton>
    </S.SearchBar>
  )
}

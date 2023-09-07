import * as S from "./searchBar.styles"
import searchIcon from "../../../../../image/search.png"
import { wordsAndNumbers } from "../../../../../service"
import { PokemonFilterContext } from "../../../../../context"
import { useCallback, useContext, useState } from "react"

export const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const { searchFilterFunction } = useContext(PokemonFilterContext)

  const mask = (e: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value
    const maskedValue = wordsAndNumbers(inputValue)
    setInputValue(maskedValue)
  }

  const handleSearch = useCallback(() => {
    searchFilterFunction(inputValue)
  }, [inputValue])

  return (
    <S.SearchBar role="menubar">
      <input
        placeholder="Search by Name or ID"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value)
        }}
        onKeyDownCapture={e => {
          if (e.key === "Enter") {
            handleSearch()
          }
        }}
        onKeyUp={mask}
      />
      <S.SearchButton onClick={handleSearch} data-testid="search-button">
        <img src={searchIcon} alt="Search Icon" />
      </S.SearchButton>
    </S.SearchBar>
  )
}

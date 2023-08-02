import searchIcon from "../../../../image/search.png"
import { wordsAndNumbers } from "../../../../service"
import * as S from "./searchBar.styles"

export const SearchBar: React.FC = ({ ...props }) => {
  const mask = (e: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value
    wordsAndNumbers(inputValue)
  }

  return (
    <S.SearchBar role="menubar">
      <input {...props} onKeyUp={mask} placeholder="Search by Name or ID" />
      <S.SearchIcon src={searchIcon} alt="Search Icon" />
    </S.SearchBar>
  )
}

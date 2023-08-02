import { styled } from "styled-components"
import { Theme } from "../../../../theme"

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    height: 40px;
    width: 341px;
    padding-right: 35px;
    padding-left: 10px;
    border-radius: 10px;
    font-size: ${Theme.font.size.main.s};

    color: ${Theme.colors.background};
  }

  @media (max-width: 1350px) {
    input {
      height: 30px;
      width: 194px;
      padding-right: 30px;
      font-size: ${Theme.font.size.main.xxs};
    }
  }
`
export const SearchIcon = styled.img`
  height: 20px;
  position: absolute;
  right: 10px;

  @media (max-width: 1350px) {
    .SearchIcon {
      height: 15px;
    }
  }
`

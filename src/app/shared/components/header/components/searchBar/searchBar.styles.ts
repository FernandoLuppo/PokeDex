import { styled } from "styled-components"
import { Theme } from "../../../../theme"

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    height: 40px;
    width: 341px;
    padding-right: 63px;
    padding-left: 10px;
    border-radius: 10px;
    font-size: ${Theme.font.size.main.s};

    color: ${Theme.colors.background};
  }

  @media (max-width: 1350px) {
    input {
      height: 35px;
      width: 220px;
      padding-right: 30px;
      font-size: ${Theme.font.size.main.xxs};
    }
  }
`

export const SearchButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  height: 40px;
  width: 45px;
  border-radius: 0 10px 10px 0;
  background: ${Theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${Theme.colors.primaryHover};
  }

  @media (max-width: 1350px) {
    height: 35px;
    width: 43px;
  }

  img {
    height: 20px;
    position: absolute;
    right: 10px;

    @media (max-width: 1350px) {
      .SearchIcon {
        height: 15px;
      }
    }
  }
`

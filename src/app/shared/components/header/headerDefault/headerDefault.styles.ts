import { Theme } from "../../../theme"
import { styled } from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 0 100px;
  border-bottom: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: inset 0 -1px 0 0 ${Theme.colors.others.lineOne};
  overflow-x: hidden;

  div {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div > h1 {
    font-size: ${Theme.font.size.main.xl};
    color: ${Theme.font.colors.title};
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 1350px) {
    padding: 0 20px;

    div > h1 {
      font-size: ${Theme.font.size.main.m};
    }
  }
`

export const HeaderImg = styled.img`
  height: 70px;
  width: 70px;
  margin-right: 15px;

  @media (max-width: 1350px) {
    height: 33px;
    width: 33px;
  }
`

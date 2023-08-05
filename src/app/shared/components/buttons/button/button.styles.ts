import { css, styled } from "styled-components"
import { Theme } from "../../../theme"

export const Button = styled.button<{ isBig: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 30px;
  font-size: ${Theme.font.size.main.s};
  border: none;
  border-radius: 10px;
  box-shadow: ${Theme.shadow.button};
  color: ${Theme.colors.card};
  background-color: ${Theme.colors.primary};

  &:hover {
    background-color: ${Theme.colors.primaryHover};
    box-shadow: none;
  }

  ${({ isBig }) =>
    isBig &&
    css`
      height: 70px;
      padding: 0 50px;
      font-size: ${Theme.font.size.main.xl};
    `}
`

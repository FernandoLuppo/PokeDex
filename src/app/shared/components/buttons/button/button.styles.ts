import { Theme } from "../../../theme"
import { css, styled } from "styled-components"

export const Button = styled.button<{ isbig: "yes" | undefined }>`
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

  ${({ isbig }) =>
    isbig === "yes" &&
    css`
      height: 70px;
      padding: 0 50px;
      font-size: ${Theme.font.size.main.xl};
    `}
`

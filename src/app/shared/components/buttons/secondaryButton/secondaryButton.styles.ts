import { css, styled } from "styled-components"
import { Theme } from "../../../theme"

export const SecondaryButton = styled.button<{ isbig: boolean }>`
  cursor: pointer;
  border: none;
  font-size: ${Theme.font.size.main.s};
  text-decoration: underline;
  color: ${Theme.colors.primary};
  background: none;

  &:hover {
    color: ${Theme.colors.primaryHover};
  }

  @media (max-width: 365px) {
    font-size: ${Theme.font.size.main.m};
  }

  ${({ isbig }) =>
    isbig &&
    css`
      font-size: ${Theme.font.size.main.l};
    `}
`

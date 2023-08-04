import { css, styled } from "styled-components"
import { Theme } from "../../../theme"

export const SecondaryButton = styled.button<{ isBig: boolean }>`
  cursor: pointer;
  border: none;
  font-size: ${Theme.font.size.main.m};
  text-decoration: underline;
  color: ${Theme.colors.primary};
  background: none;

  &:hover {
    color: ${Theme.colors.primaryHover};
  }

  @media (max-width: 365px) {
    font-size: ${Theme.font.size.main.m};
  }

  ${({ isBig }) =>
    isBig &&
    css`
      font-size: ${Theme.font.size.main.l};
    `}
`

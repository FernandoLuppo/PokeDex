import { Theme } from "../../../theme"
import { css, styled } from "styled-components"

export const SecondaryButton = styled.button<{ isbig: "yes" | undefined }>`
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
    isbig === "yes" &&
    css`
      font-size: ${Theme.font.size.main.l};
    `}
`

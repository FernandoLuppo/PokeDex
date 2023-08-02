import { styled, css } from "styled-components"
import { Theme } from "../../../../theme"

export const containerMenuMobile = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.card};

  svg {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
    `}
`

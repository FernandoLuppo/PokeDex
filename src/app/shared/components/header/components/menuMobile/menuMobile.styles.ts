import { styled, css } from "styled-components"
import { Theme } from "../../../../theme"

export const containerMenuMobile = styled.div<{ isvisible: boolean | null }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.card};
  animation: menuMobileIn 1s forwards;
  z-index: 99;

  @keyframes menuMobileIn {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }

  svg {
    cursor: pointer;
    position: absolute;
    top: 39px;
    right: 20px;
  }

  ${({ isvisible }) =>
    isvisible === false &&
    css`
      opacity: 1;
      animation: menuMobileOut 1s forwards;
      @keyframes menuMobileOut {
        from {
          left: 100%;
        }
        to {
          left: 0;
        }
      }
    `}
`

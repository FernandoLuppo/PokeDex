import { css, styled } from "styled-components"
import { Theme } from "../../../theme"

export const containerMenuMobile = styled.div<{
  isvisible: "true" | "false" | "closed"
}>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 5;
  flex-direction: column;
  background-color: ${Theme.colors.card};
  animation: menuMobileIn 1s forwards;
  z-index: 99;

  @keyframes menuMobileIn {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }

  svg {
    cursor: pointer;
    position: absolute;
    top: 39px;
    right: 20px;
  }

  ${({ isvisible }) =>
    isvisible === "false" &&
    css`
      position: fixed;
      animation: menuMobileOut 1s forwards;
      @keyframes menuMobileOut {
        from {
          left: 0;
        }
        to {
          left: 100%;
          display: none;
        }
      }
    `}
`

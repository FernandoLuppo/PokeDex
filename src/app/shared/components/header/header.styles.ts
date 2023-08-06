import styled, { css } from "styled-components"
import { Theme } from "../../theme"

export const Header = styled.header`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100vw;
  padding: 0 100px;
  border-bottom: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: inset 0 -1px 0 0 ${Theme.colors.others.lineOne};
  overflow-x: hidden;

  div {
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
export const containerMenuMobile = styled.div<{
  isvisible: "true" | "false" | "closed"
}>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
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

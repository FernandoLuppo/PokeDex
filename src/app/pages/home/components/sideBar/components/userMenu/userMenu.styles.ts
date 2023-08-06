import styled, { css } from "styled-components"
import { Theme } from "../../../../../../shared/theme"

export const ContainerUser = styled.div<{ islogged: "false" | "true" }>`
  width: 100%;
  height: 121px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: inset 0 -1px 0 0 ${Theme.colors.others.lineOne};
  padding: 20px 0;
  gap: 10px;

  p {
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.text1};
  }

  @media (max-width: 900px) {
    height: 291px;
    border-bottom: none;
    box-shadow: none;

    p {
      margin-bottom: 5px;
    }
  }

  ${({ islogged }) =>
    islogged === "false" &&
    css`
      height: auto;
    `}
`
export const ContainerMyProfileButton = styled.div`
  div > button {
    cursor: pointer;
    height: 50px;
    padding: 0 30px;
    border: none;
    border-radius: 5px;
    font-size: ${Theme.font.size.main.m};
    background: ${Theme.colors.primary};
    color: ${Theme.font.colors.ButtonText};
    box-shadow: ${Theme.shadow.button};
  }

  div > button:hover {
    background: ${Theme.colors.primaryHover};
    box-shadow: none;
  }
`

export const ContainerUserImg = styled.div`
  width: 150px;
  height: 150px;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    width: 125px;
    min-height: 125px;
  }
`

export const ContainerIsNotLogged = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button:first-child {
    margin: 0;
  }
`

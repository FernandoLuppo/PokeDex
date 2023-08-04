import styled from "styled-components"
import { Theme } from "../../../../../../shared/theme"

export const ContainerUser = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: inset 0 -1px 0 0 ${Theme.colors.others.lineOne};

  p {
    margin-bottom: 15px;
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
`
export const ContainerMyProfileButton = styled.div`
  div > button {
    cursor: pointer;
    height: 50px;
    padding: 0 30px;
    margin-bottom: 25px;
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
  margin-top: 25px;
  margin-bottom: 10px;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    width: 125px;
    min-height: 125px;
    margin-bottom: 5px;
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

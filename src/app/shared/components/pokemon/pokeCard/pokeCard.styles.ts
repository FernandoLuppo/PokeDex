import { styled } from "styled-components"
import { Theme } from "../../../theme"

export const ContainerPokeCard = styled.div`
  width: 100%;
  height: 350px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border-top: 1px solid ${Theme.colors.primary};
  border-bottom: 1px solid ${Theme.colors.primary};
  background: ${Theme.colors.card};
`
export const PokeId = styled.div`
  width: 86px;
  text-align: center;
  align-self: baseline;
  font-size: ${Theme.font.size.main.m};
  border-radius: 10px 0 10px 0;
  color: ${Theme.colors.card};
  background: ${Theme.colors.primary};
`
export const PokeInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 35px;

  p {
    text-align: center;
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.text2};
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  div > p {
    border-radius: 5px;
    padding: 5px 15px;
    font-size: ${Theme.font.size.main.xs};
    color: ${Theme.font.colors.text2};
    background-color: green;
  }
`

import { css, styled } from "styled-components"
import { Theme } from "../../../theme"
import { pokemonColor } from "../../../utils"

export const ContainerPokeCard = styled.div`
  cursor: pointer;
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
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
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
export const PokemonSprit = styled.img`
  height: 100px;
`

export const PokeInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 35px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  p {
    text-align: center;
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.text2};
  }

  div > p {
    border-radius: 5px;
    padding: 5px 15px;
    font-size: ${Theme.font.size.main.xs};
    color: ${Theme.font.colors.text1};
  }
`

export const PokeType = styled.p<{ type: string }>`
  ${({ type }) => css`
    background: ${pokemonColor(type)};
  `}
`

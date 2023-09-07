import { Theme } from "../../../theme"
import { pokemonColor } from "../../../utils"
import { css, styled } from "styled-components"

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
export const ContainerCardSuperiorInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: baseline;
`

export const PokeId = styled.div`
  width: 86px;
  text-align: center;
  font-size: ${Theme.font.size.main.m};
  border-radius: 10px 0 10px 0;
  color: ${Theme.colors.card};
  background: ${Theme.colors.primary};
`

export const RemovePokemon = styled.button`
  cursor: pointer;
  width: 50px;
  font-weight: bolder;
  font-size: ${Theme.font.size.main.m};
  border: 1px solid ${Theme.colors.primary};
  border-radius: 0 10px 0 10px;
  color: ${Theme.colors.others.exit};
  background: ${Theme.colors.background};

  &:hover {
    color: ${Theme.colors.others.exitHover};
  }
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
    color: ${Theme.font.colors.text1};
  }

  div > p {
    border-radius: 5px;
    padding: 5px 15px;
    font-size: ${Theme.font.size.main.xs};
    color: ${Theme.font.colors.title};
  }
`

export const PokeType = styled.p<{ type: string }>`
  ${({ type }) => css`
    background: ${pokemonColor(type)};
  `}
`

export const AddPokemon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${Theme.colors.background};
  }

  &:hover {
    svg {
      color: #222;
    }
  }
`

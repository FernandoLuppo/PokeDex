import { css, styled } from "styled-components"
import {
  pokemonBaseStatsColor,
  pokemonColor,
  pokemonStatsColor
} from "../../../../../../shared/utils"
import { Theme } from "../../../../../../shared/theme"

export const ContainerPokeStats = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 15px;
    font-size: ${Theme.font.size.main.l};
    color: ${Theme.font.colors.text1};
  }

  h2 {
    margin-top: 10px;
    text-align: center;
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.text1};
  }
`

export const ContainerPokeStatsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const ContainerPokeType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const PokeType = styled.p<{ type: string }>`
  width: 100%;
  text-align: center;
  padding: 20px 10px;
  font-size: ${Theme.font.size.main.s};
  border-radius: 50%;
  color: ${Theme.font.colors.title};

  ${({ type }) => css`
    background: ${pokemonColor(type)};
  `}
`

export const Line = styled.div`
  height: 200px;
  width: 3px;
  border-right: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: 1px 0 1px -1px ${Theme.colors.others.lineOne};
`
export const ContainerStats = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 10px;

  p {
    justify-self: end;
    font-size: ${Theme.font.size.main.xs};
    color: ${Theme.font.colors.text2};
  }
`

export const PokeStatsBar = styled.div<{ stats: string }>`
  width: 100px;
  min-width: 50px;
  height: 10px;
  display: flex;
  align-items: center;

  ${({ stats }) => css`
    background: ${pokemonStatsColor(stats)};
  `}
`
export const PokeBaseStats = styled.div<{ basestatus: number; stats: string }>`
  height: 5px;

  ${({ basestatus, stats }) => css`
    width: calc(${basestatus}px / 2.5);
    max-width: 100px;
    background: ${pokemonBaseStatsColor(stats)};
  `}
`

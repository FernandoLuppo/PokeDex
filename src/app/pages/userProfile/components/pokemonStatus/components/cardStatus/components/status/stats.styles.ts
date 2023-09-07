import { Theme } from "../../../../../../../../shared/theme"
import {
  pokemonBaseStatsColor,
  pokemonStatsColor
} from "../../../../../../../../shared/utils"
import { css, styled } from "styled-components"

export const ContainerStatus = styled.li`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 8px;

  p {
    justify-self: end;
    color: ${Theme.font.colors.text2};
  }
`
export const StatsBar = styled.div<{ stats: string }>`
  width: 100px;
  min-width: 50px;
  height: 10px;
  display: flex;
  align-items: center;

  ${({ stats }) => css`
    background: ${pokemonStatsColor(stats)};
  `}
`
export const BaseStats = styled.div<{ basestatus: number; stats: string }>`
  height: 5px;

  ${({ basestatus, stats }) => css`
    width: calc(${basestatus}px / 2.5);
    max-width: 100px;
    background: ${pokemonBaseStatsColor(stats)};
  `}
`

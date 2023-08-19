import { styled } from "styled-components"
import { Theme } from "../../../../shared/theme"

export const ContainerPokemonStats = styled.div`
  width: 100%;
  height: 220px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-top: 60px;
  border-radius: 25px;
  background: ${Theme.colors.card};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);

  @media (max-width: 1650px) {
    height: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 850px) {
    height: auto;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`

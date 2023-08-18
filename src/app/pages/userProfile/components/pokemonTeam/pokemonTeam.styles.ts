import { styled } from "styled-components"
import { Theme } from "../../../../shared/theme"

export const ContainerPokemonTeam = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1000px;
  padding: 30px;
  border-radius: 20px;
  border: 8px solid ${Theme.colors.card};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
`
export const PokemonLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`

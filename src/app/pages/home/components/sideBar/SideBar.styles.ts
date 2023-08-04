import { styled } from "styled-components"
import { Theme } from "../../../../shared/theme"

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 370px;
  height: 100vh;
  border-right: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: 1px 0 1px -1px ${Theme.colors.others.lineOne};
`

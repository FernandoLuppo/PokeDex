import { Theme } from "../../../../shared/theme"
import { styled } from "styled-components"

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 370px;
  height: 100vh;
  border-right: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow:
    1px 0 1px -1px ${Theme.colors.others.lineOne},
    0 1px 10px 4px rgba(0, 0, 0, 0.4);
`

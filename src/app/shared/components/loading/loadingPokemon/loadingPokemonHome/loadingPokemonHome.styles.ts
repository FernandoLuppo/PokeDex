import { styled } from "styled-components"

export const ContainerLoading = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0);

  img {
    height: 20%;
    width: auto;
  }
`

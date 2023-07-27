import { styled } from "styled-components"

export const ContainerLoadingPage = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.73);

  img {
    height: 50vh;
    width: auto;
  }
`

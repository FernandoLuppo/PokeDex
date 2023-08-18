import { styled } from "styled-components"
import { Theme } from "../../../../shared/theme"

export const ContainerUserMenu = styled.section`
  position: relative;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background-color: ${Theme.colors.card};
`
export const ContainerUserImg = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: inset 0 -1px 0 0 ${Theme.colors.others.lineOne};

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 2px solid ${Theme.colors.card};
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  }

  h2 {
    margin-bottom: 15px;
    text-align: center;
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.title};
  }

  @media (max-width: 900px) {
    width: 125px;
    min-height: 125px;
  }
`

export const ContainerForm = styled.div`
  width: 100%;
  padding: 0 50px;
`

export const ContainerButton = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  justify-content: center;
`

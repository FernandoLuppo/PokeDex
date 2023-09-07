import { Theme } from "../../theme"
import { styled } from "styled-components"

export const SideBarLogout = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  border-top: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: inset 0px 8px 1px -8px ${Theme.colors.others.lineOne};

  button {
    cursor: pointer;
    border: none;
    font-size: ${Theme.font.size.main.s};
    text-decoration: underline;
    color: ${Theme.colors.others.exit};
    background: none;
  }

  button:hover {
    color: ${Theme.colors.others.exitHover};
  }

  @media (max-width: 900px) {
    position: absolute;
    bottom: 0;

    button {
      margin: auto;
    }
  }
`

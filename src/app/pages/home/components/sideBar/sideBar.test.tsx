import { SideBar } from "./SideBar"
import { UserGetInfosContext } from "../../../../shared/context"
import { render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()
const mockLocation = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation
}))

describe("<SideBar />", () => {
  it("should render user menu", () => {
    render(
      <UserGetInfosContext.Provider
        value={{
          userIsLogged: "true",
          userInfos: { email: "test@gmail.com", name: "Test" }
        }}
      >
        <SideBar />
      </UserGetInfosContext.Provider>
    )
    const userMenu = screen.getByAltText("User Photo")
    const userName = screen.getByText("Test")

    expect(userMenu).toBeInTheDocument()
    expect(userName).toBeInTheDocument()
  })

  it("Should render menu with user dislodged", () => {
    render(
      <UserGetInfosContext.Provider
        value={{
          userIsLogged: "false",
          userInfos: { email: "", name: "" }
        }}
      >
        <SideBar />
      </UserGetInfosContext.Provider>
    )

    const loginButton = screen.getByText("Log in")
    const signupButton = screen.getByText("Sign up")

    const userMenu = screen.queryByText("User Photo")
    const userName = screen.queryByText("Test")

    expect(loginButton).toBeInTheDocument()
    expect(signupButton).toBeInTheDocument()
    expect(userMenu).not.toBeInTheDocument()
    expect(userName).not.toBeInTheDocument()
  })

  it("should render log out button", () => {
    render(
      <UserGetInfosContext.Provider
        value={{
          userIsLogged: "true",
          userInfos: { email: "test@gmail.com", name: "Test" }
        }}
      >
        <SideBar />
      </UserGetInfosContext.Provider>
    )
    const logout = screen.getByText("Log out")
    expect(logout).toBeInTheDocument()
  })

  it("should not render log out button when user is dislodged", () => {
    render(
      <UserGetInfosContext.Provider
        value={{
          userIsLogged: "false",
          userInfos: { email: "", name: "" }
        }}
      >
        <SideBar />
      </UserGetInfosContext.Provider>
    )

    const logout = screen.queryByText("Log out")

    expect(logout).not.toBeInTheDocument()
  })
})

import { fireEvent, render, screen } from "@testing-library/react"
import { Nav } from ".."
import { UserGetInfosContext } from "../../../../../context"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("Nav.tsx", () => {
  it("Should be in the document", () => {
    render(
      <UserGetInfosContext.Provider
        value={{
          userIsLogged: "true",
          userInfos: { name: "test", email: "test@gmail.com" }
        }}
      >
        <Nav />
      </UserGetInfosContext.Provider>
    )

    const homeButton = screen.getByText("Home")
    const logoutButton = screen.getByText("Logout")

    expect(homeButton).toBeInTheDocument()
    expect(logoutButton).toBeInTheDocument()
  })

  it("Should call home route when home buttons was clicked", () => {
    render(<Nav />)

    const homeButton = screen.getByText("Home")
    fireEvent.click(homeButton)

    expect(mockNavigate).toBeCalledWith("/")
  })

  it("Should call the logout route and return to home when de logout button was clicked", () => {
    render(
      <UserGetInfosContext.Provider
        value={{
          userIsLogged: "true",
          userInfos: { name: "test", email: "test@gmail.com" }
        }}
      >
        <Nav />
      </UserGetInfosContext.Provider>
    )

    const logoutButton = screen.getByText("Logout")
    fireEvent.click(logoutButton)

    expect(mockNavigate).toBeCalledWith("/")
  })
})

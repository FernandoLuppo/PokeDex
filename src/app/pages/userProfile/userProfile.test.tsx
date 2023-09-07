import { render, screen } from "@testing-library/react"
import { UserGetInfosContext } from "../../shared/context"
import { UserProfile } from ".."

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<UserProfile />", () => {
  it("Page elements should be in the document", () => {
    render(
      <UserGetInfosContext.Provider
        value={{
          userIsLogged: "true",
          userInfos: { email: "test@gmail.com", name: "Test" }
        }}
      >
        <UserProfile />
      </UserGetInfosContext.Provider>
    )

    setTimeout(() => {
      const headerLogo = screen.getByAltText("Logo")
      const headerTitle = screen.getByText("LuppoTw PokeDex")
      const headerHomeButton = screen.getByText("Home")
      const headerLogoutButton = screen.getByText("Log out")
      const emptyStats = screen.getByText("Empty")
      const emptyCard = screen.getAllByTestId("pokemon-empty-card")
      const formInputChangeName = screen.getByPlaceholderText("Test")
      const formInputChangeEmail = screen.getByPlaceholderText("test@gmail.com")
      const formButton = screen.getByText("Save")

      expect(headerLogo).toBeInTheDocument()
      expect(headerTitle).toBeInTheDocument()
      expect(headerHomeButton).toBeInTheDocument()
      expect(headerLogoutButton).toBeInTheDocument()
      expect(emptyStats).toBeInTheDocument()
      expect(emptyCard).toBeInTheDocument()
      expect(formInputChangeName).toBeInTheDocument()
      expect(formInputChangeEmail).toBeInTheDocument()
      expect(formButton).toBeInTheDocument()
    }, 3000)
  })
})

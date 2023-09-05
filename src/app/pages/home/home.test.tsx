import { fireEvent, render, screen } from "@testing-library/react"
import { Home } from ".."
import { PokemonFilterContext, UserGetInfosContext } from "../../shared/context"
import type { IPokemon } from "../../shared/types"

const mockNavigate = jest.fn()
const mockLocation = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation
}))

describe("<Home />", () => {
  describe("Home Elements", () => {
    describe("Should be in the document", () => {
      it("Should have a load screen when page is started", () => {
        render(<Home />)

        const loadGif = screen.getByAltText("Loading Gif")

        expect(loadGif).toBeInTheDocument()
      })

      it("After the page content load the loading gif needs to disappear", () => {
        render(<Home />)

        const loadGif = screen.getByAltText("Loading Gif")

        setTimeout(() => {
          expect(loadGif).not.toBeInTheDocument()
        }, 3000)
      })

      it("When screen is under than 900px and the menu button was clicked should show a mobile menu, needs show buttons log in and sign up when user is dislodged", () => {
        Object.defineProperty(window, "innerWidth", { value: 800 })
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "false",
              userInfos: { email: "", name: "" }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )

        setTimeout(() => {
          const menuButton = screen.getByRole("menu")
          fireEvent.click(menuButton)

          const loginButton = screen.getByText("Log in")
          const signupButton = screen.getByText("Sign up")

          expect(loginButton).toBeInTheDocument()
          expect(signupButton).toBeInTheDocument()
        }, 3000)
      })

      it("When screen is under than 900px and the menu button was clicked should show a mobile menu, needs show user information when user is logged", () => {
        Object.defineProperty(window, "innerWidth", { value: 800 })
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "true",
              userInfos: { email: "test@gmail.com", name: "Test" }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )

        setTimeout(() => {
          const menuButton = screen.getByRole("menu")
          fireEvent.click(menuButton)

          const userPhoto = screen.getByAltText("User Photo")
          const userName = screen.getByText("Test")
          const myProfileButton = screen.getByText("My profile")

          expect(userPhoto).toBeInTheDocument()
          expect(userName).toBeInTheDocument()
          expect(myProfileButton).toBeInTheDocument()
        }, 3000)
      })
    })

    describe("Functions should be work correctly", () => {
      it("When screen is under than 900px and the menu button was clicked should show a mobile menu", () => {
        Object.defineProperty(window, "innerWidth", { value: 800 })
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "true",
              userInfos: { email: "test@gmail.com", name: "Test" }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )

        setTimeout(() => {
          const menuButton = screen.getByRole("menu")
          fireEvent.click(menuButton)

          const userName = screen.getByText("Test")

          expect(userName).toBeInTheDocument()
        }, 3000)
      })

      it("When user search a pokemon in search bar, needs to appear his card in pokemon list", () => {
        const pokemon: IPokemon = {
          genericInfos: {
            id: 1,
            name: "bulbasaur",
            sprit: "bulbasaurSpriteTest"
          },
          types: [{ type: "grass" }]
        }

        render(
          <PokemonFilterContext.Provider
            value={{
              findPokemon: pokemon,
              isLoadingSearchPokemon: false,
              searchFilterFunction() {}
            }}
          >
            <Home />
          </PokemonFilterContext.Provider>
        )

        setTimeout(() => {
          const cardId = screen.getByText("#1")
          const cardName = screen.getByText("bulbasaur")
          const cardType = screen.getByText("grass")

          expect(cardName).toBeInTheDocument()
          expect(cardId).toBeInTheDocument()
          expect(cardType).toBeInTheDocument()
        }, 3000)
      })
    })
  })

  describe("Headers elements", () => {
    describe("Should be in the document", () => {
      it("Elements should be in the document", () => {
        render(<Home />)

        const logo = screen.getByAltText("Logo")
        const logoTitle = screen.getByText("LuppoTW PokeDex")
        const searchBar = screen.getByPlaceholderText(
          "Search by Name or ID"
        ) as HTMLInputElement

        expect(logo).toBeInTheDocument()
        expect(logoTitle).toBeInTheDocument()
        expect(searchBar).toBeInTheDocument()
      })

      it("When the screen is lower then 900px the burger button needs to appear", () => {
        Object.defineProperty(window, "innerWidth", { value: 800 })

        render(<Home />)

        const menuButton = screen.getByRole("menu")
        const searchBar = screen.queryByPlaceholderText(
          "Search by Name or ID"
        ) as HTMLInputElement

        expect(menuButton).toBeInTheDocument()
        expect(searchBar).toBeInTheDocument()
      })
    })

    describe("Functions should be work correctly", () => {
      it("Search bar should filter some characters", () => {
        render(<Home />)

        const searchBar = screen.getByPlaceholderText(
          "Search by Name or ID"
        ) as HTMLInputElement

        fireEvent.keyUp(searchBar, { target: { value: "Abc123!@#" } })

        expect(searchBar.value).toBe("Abc123")
      })
    })
  })

  describe("SideBar elements", () => {
    describe("Should be in the document", () => {
      it("Elements should be in the document whit user dislodged", () => {
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "false",
              userInfos: { email: "", name: "" }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )

        setTimeout(() => {
          const loginButton = screen.getByText("Log in")
          const signupButton = screen.getByText("Sign up")

          const userImg = screen.queryByAltText("User Photo")
          const userName = screen.queryByText("Test")
          const myProfileButton = screen.queryByText("My profile")

          expect(loginButton).toBeInTheDocument()
          expect(signupButton).toBeInTheDocument()

          expect(userImg).not.toBeInTheDocument()
          expect(userName).not.toBeInTheDocument()
          expect(myProfileButton).not.toBeInTheDocument()
        }, 3000)
      })

      it("Elements should be in the document with user logged", () => {
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "true",
              userInfos: { email: "test@gmail.com", name: "Test" }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )
        setTimeout(() => {
          const userImg = screen.getByAltText("User Photo")
          const userName = screen.getByText("Test")
          const myProfileButton = screen.getByText("My profile")

          const loginButton = screen.queryByText("Log in")
          const signupButton = screen.queryByText("Sign up")

          expect(userImg).toBeInTheDocument()
          expect(userName).toBeInTheDocument()
          expect(myProfileButton).toBeInTheDocument()

          expect(loginButton).not.toBeInTheDocument()
          expect(signupButton).not.toBeInTheDocument()
        }, 3000)
      })
    })

    describe("Functions should be work correctly", () => {
      it("When user is dislodged and log in button was clicked should send user to login", () => {
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "false",
              userInfos: { email: "", name: "" }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )

        setTimeout(() => {
          const loginButton = screen.getByText("Log in")
          fireEvent.click(loginButton)

          expect(mockNavigate).toBeCalledWith("/login")
        }, 3000)
      })

      it("When user is dislodged and sign up button was clicked should send user to login", () => {
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "false",
              userInfos: { email: "", name: "" }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )

        setTimeout(() => {
          const signupButton = screen.getByText("Sign up")
          fireEvent.click(signupButton)

          expect(mockNavigate).toBeCalledWith("/register")
        }, 3000)
      })

      it("When user is logged and click in My profile button should send user to his profile", () => {
        const userName = "Test"
        render(
          <UserGetInfosContext.Provider
            value={{
              userIsLogged: "true",
              userInfos: { email: "test@gmail.com", name: userName }
            }}
          >
            <Home />
          </UserGetInfosContext.Provider>
        )

        const url = `/user/${userName}`.toLowerCase()

        setTimeout(() => {
          const myProfileButton = screen.getByText("My profile")
          fireEvent.click(myProfileButton)

          expect(mockNavigate).toBeCalledWith(url)
        }, 3000)
      })
    })

    describe("Pokemon List", () => {
      describe("Should be in the document", () => {
        it("Pokemon card should be in the document", () => {
          render(<Home />)

          setTimeout(() => {
            const pokeCard = screen.getByText("#1")

            expect(pokeCard).toBeInTheDocument()
          }, 3000)
        })
      })

      describe("Functions should be work correctly", () => {
        it("When user scroll the page to end should load more pokemon", () => {
          const { container } = render(<Home />)

          window.scrollTo(0, container.scrollHeight)

          setTimeout(() => {
            const pokemonCard = screen.getByText("#23")
            expect(pokemonCard).toBeInTheDocument()
          }, 3000)
        })

        it("When user click in the pokemon card user should be send to pokemon infos", () => {
          render(<Home />)
          const pokemonId = "1"

          setTimeout(() => {
            const pokemonCard = screen.getByText(`#${pokemonId}`)
            fireEvent.click(pokemonCard)

            expect(mockNavigate).toBeCalledWith(`/pokemon/${pokemonId}`)
          }, 3000)
        })
      })
    })
  })
})

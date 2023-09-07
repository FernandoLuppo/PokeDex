import { fireEvent, render, screen } from "@testing-library/react"
import { UserMenu } from ".."
import { UserGetInfosContext } from "../../../../shared/context"

beforeEach(() => {
  render(
    <UserGetInfosContext.Provider
      value={{
        userInfos: { email: "test@gmail.com", name: "Test" },
        userIsLogged: "true"
      }}
    >
      <UserMenu />
    </UserGetInfosContext.Provider>
  )
})

describe("<UserMenu />", () => {
  describe("Should be in the document", () => {
    it("Page elements should be in the document", () => {
      const userImg = screen.getByAltText("User Photo")
      const userName = screen.getByText("Test")
      const formTitleChangeName = screen.getByText("Name:")
      const formInputChangeName = screen.getByPlaceholderText("Test")
      const formTitleChangeEmail = screen.getByText("Email:")
      const formInputChangeEmail = screen.getByPlaceholderText("test@gmail.com")
      const formButton = screen.getByText("Save")

      expect(userImg).toBeInTheDocument()
      expect(userName).toBeInTheDocument()
      expect(formTitleChangeName).toBeInTheDocument()
      expect(formInputChangeName).toBeInTheDocument()
      expect(formTitleChangeEmail).toBeInTheDocument()
      expect(formInputChangeEmail).toBeInTheDocument()
      expect(formButton).toBeInTheDocument()
    })
  })

  describe("Functions should be work correctly", () => {
    it("Should change the user email and name when user fill the form and clicked in Save button", () => {
      const formInputChangeName = screen.getByPlaceholderText("Test")
      const formInputChangeEmail = screen.getByPlaceholderText("test@gmail.com")
      const formButton = screen.getByText("Save")

      fireEvent.keyUp(formInputChangeName, { target: { value: "Fernando" } })
      fireEvent.keyUp(formInputChangeEmail, {
        target: { value: "fernando@gmail.com" }
      })
      fireEvent.click(formButton)

      setTimeout(() => {
        const newFormInputChangeName = screen.getByPlaceholderText("Fernando")
        const newFormInputChangeEmail =
          screen.getByPlaceholderText("fernando@gmail.com")

        expect(newFormInputChangeName).toBeInTheDocument()
        expect(newFormInputChangeEmail).toBeInTheDocument()
      }, 3000)
    })

    it("Should return a error when user try change the email and name in form and clicked in Save button", () => {
      const formInputChangeName = screen.getByPlaceholderText("Test")
      const formInputChangeEmail = screen.getByPlaceholderText("test@gmail.com")
      const formButton = screen.getByText("Save")

      fireEvent.keyUp(formInputChangeName, { target: { value: "f" } })
      fireEvent.keyUp(formInputChangeEmail, {
        target: { value: "f" }
      })

      fireEvent.click(formButton)

      setTimeout(() => {
        const newFormInputChangeName = screen.getByPlaceholderText("Fernando")
        const newFormInputChangeEmail =
          screen.getByPlaceholderText("fernando@gmail.com")
        const error = screen.getByText("jwt must be provided")

        expect(error).toBeInTheDocument()

        expect(newFormInputChangeName).not.toBeInTheDocument()
        expect(newFormInputChangeEmail).not.toBeInTheDocument()
      }, 3000)
    })
  })
})

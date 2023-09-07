import { Form } from "./Form"
import { fireEvent, render, screen } from "@testing-library/react"

describe("<Form />", () => {
  describe("Should be in the document", () => {
    it("Should be in the document the input email and password only", () => {
      render(
        <Form
          isName={false}
          isPassword={true}
          setName={() => {}}
          setEmail={() => {}}
          setPassword={() => {}}
          error={undefined}
        />
      )

      const inputName = screen.queryByPlaceholderText("Example: Ash Ketchum")
      const inputEmail = screen.getByPlaceholderText("Example: red@gmail.com")
      const inputPassword = screen.getByPlaceholderText("******")

      expect(inputEmail).toBeInTheDocument()
      expect(inputPassword).toBeInTheDocument()
      expect(inputName).toBeNull()
    })

    it("Should be in the document the input email only", () => {
      render(
        <Form
          isName={false}
          isPassword={false}
          setName={() => {}}
          setEmail={() => {}}
          setPassword={() => {}}
          error={undefined}
        />
      )

      const inputName = screen.queryByPlaceholderText("Example: Ash Ketchum")
      const inputEmail = screen.getByPlaceholderText("Example: red@gmail.com")
      const inputPassword = screen.queryByPlaceholderText("******")

      expect(inputEmail).toBeInTheDocument()
      expect(inputPassword).toBeNull()
      expect(inputName).toBeNull()
    })

    it("Should be in the document the input name, email and password", () => {
      render(
        <Form
          isName={true}
          isPassword={true}
          setName={() => {}}
          setEmail={() => {}}
          setPassword={() => {}}
          error={undefined}
        />
      )

      const inputName = screen.getByPlaceholderText("Example: Ash Ketchum")
      const inputEmail = screen.getByPlaceholderText("Example: red@gmail.com")
      const inputPassword = screen.getByPlaceholderText("******")

      expect(inputName).toBeInTheDocument()
      expect(inputEmail).toBeInTheDocument()
      expect(inputPassword).toBeInTheDocument()
    })
  })
  describe("Inputs should work correctly", () => {
    it("User should be able to write in inputs", () => {
      render(
        <Form
          isName={true}
          isPassword={true}
          setName={() => {}}
          setEmail={() => {}}
          setPassword={() => {}}
          error={undefined}
        />
      )
      const userName = "Ash Ketchum"
      const userEmail = "red@gmail.com"
      const userPassword = "123456"

      const inputName = screen.getByPlaceholderText("Example: Ash Ketchum")
      const inputEmail = screen.getByPlaceholderText("Example: red@gmail.com")
      const inputPassword = screen.getByPlaceholderText("******")

      fireEvent.keyUp(inputName, { target: { value: userName } })
      fireEvent.keyUp(inputEmail, { target: { value: userEmail } })
      fireEvent.keyUp(inputPassword, { target: { value: userPassword } })

      expect(inputName).toHaveValue(userName)
      expect(inputEmail).toHaveValue(userEmail)
      expect(inputPassword).toHaveValue(userPassword)
    })

    it("Should call the input setName, setEmail and setPassword function correctly", () => {
      const mockSetName = jest.fn()
      const mockSetEmail = jest.fn()
      const mockSetPassword = jest.fn()

      const userName = "Ash Ketchum"
      const userEmail = "red@gmail.com"
      const userPassword = "123456"

      render(
        <Form
          isName={true}
          isPassword={true}
          setName={mockSetName}
          setEmail={mockSetEmail}
          setPassword={mockSetPassword}
          error={undefined}
        />
      )

      const inputName = screen.getByPlaceholderText("Example: Ash Ketchum")
      const inputEmail = screen.getByPlaceholderText("Example: red@gmail.com")
      const inputPassword = screen.getByPlaceholderText("******")

      fireEvent.change(inputName, { target: { value: userName } })
      fireEvent.change(inputEmail, { target: { value: userEmail } })
      fireEvent.change(inputPassword, { target: { value: userPassword } })

      expect(mockSetName).toBeCalledTimes(1)
      expect(mockSetName).toHaveBeenCalledWith(userName)
      expect(mockSetEmail).toBeCalledTimes(1)
      expect(mockSetEmail).toHaveBeenCalledWith(userEmail)
      expect(mockSetPassword).toBeCalledTimes(1)
      expect(mockSetPassword).toHaveBeenCalledWith(userPassword)
    })
  })
  describe("Should show errors correctly", () => {
    it("Errors should be in the document", () => {
      const errors = {
        name: ["Error in input name"],
        email: ["Error in input email"],
        password: ["Error in input password"]
      }

      render(
        <Form
          isName={true}
          isPassword={true}
          setName={() => {}}
          setEmail={() => {}}
          setPassword={() => {}}
          error={errors}
        />
      )

      const nameErrors = screen.getByText("Error in input name")
      const emailErrors = screen.getByText("Error in input email")
      const passwordErrors = screen.getByText("Error in input password")

      expect(nameErrors).toBeInTheDocument()
      expect(nameErrors).toHaveTextContent("Error in input name")
      expect(emailErrors).toBeInTheDocument()
      expect(emailErrors).toHaveTextContent("Error in input email")
      expect(passwordErrors).toBeInTheDocument()
      expect(passwordErrors).toHaveTextContent("Error in input password")
    })
  })
})

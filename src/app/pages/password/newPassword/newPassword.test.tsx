import { fireEvent, render, screen } from "@testing-library/react"
import { NewPassword } from ".."

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<NewPassword />", () => {
  describe("Should be in the document", () => {
    it("Page components should be in the document", () => {
      render(<NewPassword />)

      const cardTitle = screen.getByText("Create a new Password")
      const inputPassword = screen.getByPlaceholderText(
        "Enter your password..."
      )
      const inputPasswordConfirm = screen.getByPlaceholderText(
        "Re-fill your password..."
      )
      const buttonSend = screen.getByText("Send")

      expect(cardTitle).toBeInTheDocument()
      expect(inputPassword).toBeInTheDocument()
      expect(inputPasswordConfirm).toBeInTheDocument()
      expect(buttonSend).toBeInTheDocument()
    })
  })

  describe("Functions should be work correctly", () => {
    it("Should send user to login when input password and input re-fill password is filled and button send was clicked", () => {
      render(<NewPassword />)

      const inputPassword = screen.getByPlaceholderText(
        "Enter your password..."
      )
      const inputPasswordConfirm = screen.getByPlaceholderText(
        "Re-fill your password..."
      )
      const buttonSend = screen.getByText("Send")

      fireEvent.keyUp(inputPassword, { target: { value: "123456" } })
      fireEvent.keyUp(inputPasswordConfirm, { target: { value: "123456" } })
      fireEvent.click(buttonSend)

      setTimeout(() => {
        expect(mockNavigate).toBeCalledWith("/login")
      }, 3000)
    })

    it("Should appear a error when inputs is not whit same values", () => {
      render(<NewPassword />)

      const inputPassword = screen.getByPlaceholderText(
        "Enter your password..."
      )
      const inputPasswordConfirm = screen.getByPlaceholderText(
        "Re-fill your password..."
      )
      const buttonSend = screen.getByText("Send")

      fireEvent.keyUp(inputPassword, { target: { value: "123456" } })
      fireEvent.keyUp(inputPasswordConfirm, { target: { value: "12345" } })
      fireEvent.click(buttonSend)

      setTimeout(() => {
        const errorMessage = screen.getByTestId("error")

        expect(errorMessage).toBeInTheDocument()
        expect(mockNavigate).not.toBeCalledWith("/login")
      }, 3000)
    })
  })
})

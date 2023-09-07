import { RecoverPassword } from ".."
import { fireEvent, render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<RecoverPassword />", () => {
  describe("Should be in the document", () => {
    it("Page components should be in the document", () => {
      render(<RecoverPassword />)

      const cardTitle = screen.getByText("Reset your password")
      const cardText = screen.getByText(
        "Enter the email below where you would like to receive your new password."
      )
      const cardEmailInput = screen.getByPlaceholderText(
        "Put here your email..."
      )
      const cardButton = screen.getByText("Send")

      expect(cardTitle).toBeInTheDocument()
      expect(cardText).toBeInTheDocument()
      expect(cardEmailInput).toBeInTheDocument()
      expect(cardButton).toBeInTheDocument()
    })

    it("After user send the code in his email, should change the card content, this new content should be in the document", () => {
      render(<RecoverPassword />)

      const cardEmailInput = screen.getByPlaceholderText(
        "Put here your email..."
      ) as HTMLInputElement
      const cardButton = screen.getByText("Send")

      fireEvent.keyUp(cardEmailInput, { target: { value: "test@gmail.com" } })
      fireEvent.click(cardButton)

      setTimeout(() => {
        const newCardTitle = screen.getByText(
          "Enter the code sent to your email here:"
        )
        const newCardInput = screen.getByPlaceholderText(
          "Put the code sent to se email"
        )
        const newCardSendButton = screen.getByText("Verify")
        const newCardSecondaryButton = screen.getByText("Resend code")

        expect(newCardTitle).toBeInTheDocument()
        expect(newCardInput).toBeInTheDocument()
        expect(newCardSendButton).toBeInTheDocument()
        expect(newCardSecondaryButton).toBeInTheDocument()
      }, 3000)
    })
  })
  describe("Function should be work correctly", () => {
    it("Should change the card content when user fill the email input and sed the recover password code", () => {
      render(<RecoverPassword />)

      const cardEmailInput = screen.getByPlaceholderText(
        "Put here your email..."
      ) as HTMLInputElement
      const cardButton = screen.getByText("Send")

      fireEvent.keyUp(cardEmailInput, { target: { value: "test@gmail.com" } })
      fireEvent.click(cardButton)

      setTimeout(() => {
        const newCardTitle = screen.getByText(
          "Enter the code sent to your email here:"
        )

        expect(newCardTitle).toBeInTheDocument()
        expect(cardEmailInput).not.toBeInTheDocument()
        expect(cardButton).not.toBeInTheDocument()
      }, 3000)
    })

    it("Should return an error when the user fills the email input wrong", () => {
      render(<RecoverPassword />)

      const cardEmailInput = screen.getByPlaceholderText(
        "Put here your email..."
      ) as HTMLInputElement
      const cardButton = screen.getByText("Send")

      fireEvent.keyUp(cardEmailInput, { target: { value: "" } })
      fireEvent.click(cardButton)

      const newCardTitle = screen.queryByText(
        "Enter the code sent to your email here:"
      )

      setTimeout(() => {
        expect(newCardTitle).not.toBeInTheDocument()
      }, 3000)
    })

    it("Should send to next step of change password when user fill the inputs correctly", () => {
      render(<RecoverPassword />)

      const cardEmailInput = screen.getByPlaceholderText(
        "Put here your email..."
      ) as HTMLInputElement
      const cardButton = screen.getByText("Send")

      fireEvent.keyUp(cardEmailInput, { target: { value: "test@gmail.com" } })
      fireEvent.click(cardButton)

      setTimeout(() => {
        const newCardInput = screen.getByPlaceholderText(
          "Put the code sent to se email"
        )
        const newCardSendButton = screen.getByText("Verify")

        fireEvent.keyUp(newCardInput, { target: { value: "12345" } })
        fireEvent.click(newCardSendButton)

        expect(mockNavigate).toBeCalledWith(
          "recover-password/new-password/12345"
        )
      }, 3000)
    })
  })
})

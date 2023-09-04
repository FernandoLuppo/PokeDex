import { fireEvent, render, screen } from "@testing-library/react"
import { Logout } from ".."

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("Logout.tsx", () => {
  it("Should be in the document", () => {
    render(<Logout />)

    const logoutButton = screen.getByText("Log out")

    expect(logoutButton).toBeInTheDocument()
  })

  it("Should call the home route when button was clicked", () => {
    render(<Logout />)

    const logoutButton = screen.getByText("Log out")
    fireEvent.click(logoutButton)

    setTimeout(() => {
      expect(mockNavigate).toBeCalledWith("/")
    }, 2000)
  })
})

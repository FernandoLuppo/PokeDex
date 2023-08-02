import { render, screen } from "@testing-library/react"
import { SideBar } from "./SideBar"

describe("<SideBar />", () => {
  // Should render user photo

  it("should render user menu", () => {
    render(<SideBar />)
    const userMenu = screen.queryByRole("img", { name: "User Photo" })
    expect(userMenu).toBeInTheDocument()
  })

  it("should render filter", () => {
    render(<SideBar />)
    const filter = screen.getByText("Generation")
    expect(filter).toBeInTheDocument()
  })

  it("should render log out button", () => {
    render(<SideBar />)
    const logout = screen.queryByText("Log out")
    expect(logout).toBeInTheDocument()
  })
})

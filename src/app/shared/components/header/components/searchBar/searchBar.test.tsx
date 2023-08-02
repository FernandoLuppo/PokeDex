import { fireEvent, render, screen } from "@testing-library/react"
import { SearchBar } from "./SearchBar"

describe("<SearchBar />", () => {
  beforeEach(() => {
    render(<SearchBar />)
  })

  it("Should be in the documented", () => {
    const input = screen.getByPlaceholderText(
      "Search by Name or ID"
    ) as HTMLInputElement

    expect(input).toBeInTheDocument()
  })

  it("Should contain just letters and numbers", () => {
    const input = screen.getByPlaceholderText(
      "Search by Name or ID"
    ) as HTMLInputElement

    fireEvent.keyUp(input, { target: { value: "Abc123!@#" } })

    expect(input.value).toBe("Abc123")
  })
})

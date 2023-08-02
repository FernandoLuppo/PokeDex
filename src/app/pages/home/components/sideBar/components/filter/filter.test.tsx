import { Filter } from "./Filter"
import { render, screen } from "@testing-library/react"

describe("<Filter />", () => {
  it("Should be in the document the filters Generation and Type", () => {
    render(<Filter />)
    const generationFilter = screen.getByText("Generation")
    const typeFilter = screen.getByText("Type")

    expect(generationFilter).toBeInTheDocument()
    expect(typeFilter).toBeInTheDocument()
  })
})

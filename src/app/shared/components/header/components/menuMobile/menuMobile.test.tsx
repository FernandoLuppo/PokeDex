import { fireEvent, render, screen } from "@testing-library/react"
import { MenuMobile } from "./MenuMobile"

describe("<MenuMobile />", () => {
  it("Should render correct the MenuMobile component", () => {
    render(<MenuMobile menuIsVisible={true} setMenuIsVisible={() => {}} />)

    const buttons = screen.getAllByRole("button")

    const closeButton = buttons.find(button => (button.style.color = "#f2f2f2"))

    expect(closeButton).toBeInTheDocument()
  })

  it("The setMenuIsVisible function must be correctly called when the close button is clicked", () => {
    const setMenuIsVisibleMock = jest.fn()
    render(
      <MenuMobile
        menuIsVisible={true}
        setMenuIsVisible={setMenuIsVisibleMock}
      />
    )

    const buttons = screen.getAllByRole("button")

    const closeButton = buttons.find(button => (button.style.height = "25"))
    if (closeButton !== undefined) {
      fireEvent.click(closeButton)
      expect(setMenuIsVisibleMock).toHaveBeenCalledWith(false)
    }
  })
})

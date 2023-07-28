import { fireEvent, render, screen } from "@testing-library/react"
import { InputForm } from ".."

describe("<InputForm />", () => {
  describe("<label>", () => {
    it("Should be in the document with the right text", () => {
      const labelText = "Name:"
      render(<InputForm text={labelText} label="name" id="name" />)

      const labelElement = screen.getByText(labelText)

      expect(labelElement).toBeInTheDocument()
      expect(labelElement).toHaveTextContent(labelText)
    })
  })
  describe("<input>", () => {
    it("Should be in the document with a placeholder", () => {
      const label = "Label of Test"
      const inputText = "Text of Test"
      const placeholderText = "Example: Ash Ketchum"
      render(
        <InputForm
          label={label}
          text={inputText}
          placeholder={placeholderText}
        />
      )

      const inputElement = screen.getByPlaceholderText(placeholderText)

      expect(inputElement).toBeInTheDocument()
      expect(inputElement).toHaveAttribute("placeholder", placeholderText)
    })

    it("Should be able to user write in input", () => {
      const label = "Label of Test"
      const inputText = "Text of Test"
      const placeholderText = "Example: Ash Ketchum"
      const inputValue = "Ash Ketchum"

      render(
        <InputForm
          label={label}
          text={inputText}
          placeholder={placeholderText}
        />
      )
      const inputElement = screen.getByPlaceholderText(placeholderText)
      fireEvent.keyUp(inputElement, { target: { value: inputValue } })

      expect(inputElement).toHaveValue(inputValue)
    })

    it("Should be able to active some event", () => {
      const label = "Label of Test"
      const inputText = "Text of Test"
      const placeholderText = "Example: Ash Ketchum"
      const inputValue = "Ash Ketchum"
      const mockEvent = jest.fn()

      render(
        <InputForm
          label={label}
          text={inputText}
          onChange={mockEvent}
          placeholder={placeholderText}
        />
      )
      const inputElement = screen.getByPlaceholderText(placeholderText)
      fireEvent.change(inputElement, { target: { value: inputValue } })

      expect(mockEvent).toBeCalledTimes(1)
    })
  })
  describe("errors", () => {
    it("Should render the error in document", () => {
      const label = "name"
      const inputText = "Name:"
      const errors = [
        "Input name can't be empty",
        "Input name needs to have more than 3 character"
      ]

      render(<InputForm label={label} text={inputText} errors={errors} />)

      const elementErrorOne = screen.getByText("Input name can't be empty")
      const elementErrorTwo = screen.getByText(
        "Input name needs to have more than 3 character"
      )

      expect(elementErrorOne).toBeInTheDocument()
      expect(elementErrorOne).toHaveTextContent(errors[0])
      expect(elementErrorTwo).toBeInTheDocument()
      expect(elementErrorTwo).toHaveTextContent(errors[1])
    })
  })
})

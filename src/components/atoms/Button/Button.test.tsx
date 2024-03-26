import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import Button from './Button'

describe('Button Component', () => {
  test('renders Button component with default props', () => {
    render(<Button onClick={() => {}}>Default Button</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Default Button')
  })

  test('Button handles click event', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders Button component with disabled prop', () => {
    render(
      <Button disabled onClick={() => {}}>
        Disabled Button
      </Button>
    )
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeDisabled()
  })

  test('renders Button component with icon on the left', () => {
    render(
      <Button icon='star' iconPosition='left' onClick={() => {}}>
        Button with Icon Star
      </Button>
    )
    const iconElement = screen.getByAltText('star')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('src', `/static/icons/star.svg`)
  })

  test('renders Button component with custom color', () => {
    render(
      <Button color='light-lavander' onClick={() => {}}>
        Light Lavander Button
      </Button>
    )
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveStyle('background-color: ButtonFace')
  })
})

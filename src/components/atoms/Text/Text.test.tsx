import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import Text from '../Text'

describe('Text Component', () => {
  test('renders text content correctly', () => {
    render(<Text>Test Content</Text>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('renders with different children types', () => {
    const { rerender } = render(<Text>String Child</Text>)
    expect(screen.getByText('String Child')).toBeInTheDocument()

    rerender(
      <Text>
        <span>Element Child</span>
      </Text>
    )
    expect(screen.getByText('Element Child')).toBeInTheDocument()
  })
})

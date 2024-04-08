import { truncateText } from './index'

describe('truncateText', () => {
  it('should return the original text if it is shorter than the specified length', () => {
    const text = 'Hello World'
    const length = 20
    expect(truncateText(text, length)).toBe(text)
  })

  it('should return the truncated text ending with "..." if it is longer than the specified length', () => {
    const text = 'Hello World, this is a test of the truncateText function.'
    const length = 25
    // Expected to truncate near a space to avoid breaking words
    const expected = 'Hello World, this is a...'
    expect(truncateText(text, length)).toBe(expected)
  })

  it('should handle edge case where text length equals the specified length', () => {
    const text = 'Hello World'
    const length = 11 // Equal to text length
    expect(truncateText(text, length)).toBe(text)
  })

  it('should not end with a space before the ellipsis when truncating', () => {
    const text = 'Hello World, this should not end with space '
    const length = 36
    // Ensuring it does not end with a space before the ellipsis
    const expected = 'Hello World, this should not end...'
    expect(truncateText(text, length)).toBe(expected)
  })
})

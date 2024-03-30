const truncateText = (text: string, length: number) => {
  if (text.length > length) {
    const customText = text.slice(0, length).split(' ').slice(0, -1).join(' ')
    return `${customText}...`
  }
  return text
}

export { truncateText }

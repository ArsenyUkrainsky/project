import { useState, useEffect, type RefObject } from 'react'

type ScrollIntoViewOptions = {
  behavior: ScrollBehavior
  block: ScrollLogicalPosition
  inline: ScrollLogicalPosition
}

function useDeviceType() {
  const [deviceType, setDeviceType] = useState({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setDeviceType({
        isDesktop: width > 769,
        isTablet: width <= 768 && width > 640,
        isMobile: width <= 640,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return deviceType
}
function useSmoothScroll() {
  const executeScroll = (
    ref: RefObject<HTMLElement>,
    options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start', inline: 'nearest' }
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView(options)
    }
  }

  return executeScroll
}

export { useDeviceType, useSmoothScroll }

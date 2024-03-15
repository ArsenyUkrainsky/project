import { useState, useEffect } from 'react'

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

export { useDeviceType }

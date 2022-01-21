import { useEffect, useState, useRef } from 'react'

function useClientHeight() {
  const [height, setHeight] = useState(window.innerHeight)

  const handleWindowSizeChange = () => {
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    setHeight(window.innerHeight)

    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return [height]
}

export default useClientHeight

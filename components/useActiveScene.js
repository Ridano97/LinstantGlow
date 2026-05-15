'use client'

import { useEffect, useState } from 'react'

export default function useActiveScene(sceneIndex) {
  const [isActive, setIsActive] = useState(sceneIndex === 0)

  useEffect(() => {
    let frameId = null
    let timerId = null

    const setSceneActive = (nextIsActive, delay = 0) => {
      window.clearTimeout(timerId)

      if (!nextIsActive) {
        setIsActive(false)
        return
      }

      timerId = window.setTimeout(() => {
        setIsActive(true)
      }, delay)
    }

    const syncFromDocument = () => {
      const currentScene = Number(document.documentElement.dataset.luxuryScene ?? 0)
      setSceneActive(currentScene === sceneIndex)
    }

    const handleSceneChange = (event) => {
      setSceneActive(event.detail?.activeScene === sceneIndex, 160)
    }

    window.addEventListener('luxurySceneChange', handleSceneChange)
    frameId = window.requestAnimationFrame(syncFromDocument)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.clearTimeout(timerId)
      window.removeEventListener('luxurySceneChange', handleSceneChange)
    }
  }, [sceneIndex])

  return isActive
}

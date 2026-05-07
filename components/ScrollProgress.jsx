'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [sceneProgress, setSceneProgress] = useState(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleSceneProgress = (event) => {
      setSceneProgress(event.detail)
    }

    window.addEventListener('luxurySceneProgress', handleSceneProgress)

    return () => {
      window.removeEventListener('luxurySceneProgress', handleSceneProgress)
    }
  }, [])

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: sceneProgress ?? scaleX }}
      aria-hidden="true"
    />
  )
}

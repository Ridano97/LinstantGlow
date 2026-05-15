'use client'

import { useEffect } from 'react'

const SCENES = {
  '#experience': 0,
  '#salon': 1,
  '#prestations': 2,
  '#atelier': 3,
  '#contact': 4,
}

const ENTER_DIRECTIONS = [
  { x: 0, y: 112 },
  { x: 112, y: 0 },
  { x: -112, y: 0 },
  { x: 0, y: -112 },
]

const TRANSITION_MS = 980

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const setPanelVector = (panel, prefix, vector) => {
  panel.style.setProperty(`--scene-${prefix}-x`, `${vector.x}%`)
  panel.style.setProperty(`--scene-${prefix}-y`, `${vector.y}%`)
}

export default function LuxuryScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) return undefined

    const panels = Array.from(document.querySelectorAll('.scene-panel'))
    const html = document.documentElement
    const body = document.body
    const previousScrollRestoration = window.history.scrollRestoration

    if (!panels.length) return undefined

    let activeScene = 0
    let isAnimating = false
    let touchStartX = 0
    let touchStartY = 0
    let touchStartedInScrollableZone = false
    let verticalScrollableElement = null
    let lastWheelAt = 0
    let transitionTimer = null

    const dispatchProgress = () => {
      window.dispatchEvent(new CustomEvent('luxurySceneProgress', {
        detail: panels.length > 1 ? activeScene / (panels.length - 1) : 1,
      }))
    }

    const cleanPanel = (panel) => {
      panel.classList.remove('scene-panel-active', 'scene-panel-exit')
    }

    const activateScene = (index) => {
      panels.forEach((panel, panelIndex) => {
        cleanPanel(panel)
        panel.classList.toggle('scene-panel-active', panelIndex === index)
      })
    }

    const resetToHero = () => {
      if (SCENES[window.location.hash] !== undefined) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
      }

      window.history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
      html.classList.add('scene-fullpage')
      body.classList.add('scene-fullpage')
      activateScene(activeScene)
      dispatchProgress()
    }

    const isInsideServiceModal = (target) => target.closest?.('.service-modal, .service-modal-backdrop')
    const isInsideScrollableZone = (target) => target.closest?.('.services-grid, .atelier-phone-carousel, .atelier-reels-track, .atelier-mobile-track')
    const getVerticalScrollableZone = (target) => target.closest?.('.slogan, .service-modal-prices')

    const goToScene = (nextScene) => {
      const targetScene = clamp(nextScene, 0, panels.length - 1)

      if (targetScene === activeScene || isAnimating) return

      isAnimating = true

      const previousScene = activeScene
      const direction = targetScene > previousScene ? 1 : -1
      const incoming = panels[targetScene]
      const outgoing = panels[previousScene]
      const isMobileScene = window.matchMedia('(max-width: 900px)').matches
      const baseVector = isMobileScene
        ? { x: 0, y: 112 }
        : ENTER_DIRECTIONS[(targetScene - 1 + ENTER_DIRECTIONS.length) % ENTER_DIRECTIONS.length]
      const enterVector = {
        x: direction > 0 ? baseVector.x : -baseVector.x,
        y: direction > 0 ? baseVector.y : -baseVector.y,
      }
      const exitVector = {
        x: -enterVector.x * 0.34,
        y: -enterVector.y * 0.34,
      }

      window.clearTimeout(transitionTimer)
      activeScene = targetScene
      dispatchProgress()

      cleanPanel(incoming)
      setPanelVector(incoming, 'enter', enterVector)
      setPanelVector(outgoing, 'exit', exitVector)

      incoming.getBoundingClientRect()

      outgoing.classList.remove('scene-panel-active')
      outgoing.classList.add('scene-panel-exit')
      incoming.classList.add('scene-panel-active')

      transitionTimer = window.setTimeout(() => {
        panels.forEach((panel, panelIndex) => {
          panel.classList.toggle('scene-panel-active', panelIndex === activeScene)
          panel.classList.remove('scene-panel-exit')
        })
        isAnimating = false
      }, TRANSITION_MS)
    }

    const handleWheel = (event) => {
      if (isInsideServiceModal(event.target)) return

      event.preventDefault()

      const now = Date.now()
      if (Math.abs(event.deltaY) < 12 || now - lastWheelAt < TRANSITION_MS * 0.72) return

      lastWheelAt = now
      goToScene(activeScene + (event.deltaY > 0 ? 1 : -1))
    }

    const handleTouchStart = (event) => {
      if (isInsideServiceModal(event.target)) return

      touchStartX = event.touches[0]?.clientX ?? 0
      touchStartY = event.touches[0]?.clientY ?? 0
      touchStartedInScrollableZone = Boolean(isInsideScrollableZone(event.target))
      verticalScrollableElement = getVerticalScrollableZone(event.target) ?? null
    }

    const handleTouchMove = (event) => {
      if (isInsideServiceModal(event.target) || verticalScrollableElement) return

      const touch = event.touches[0]
      const distanceX = (touch?.clientX ?? touchStartX) - touchStartX
      const distanceY = (touch?.clientY ?? touchStartY) - touchStartY

      if (touchStartedInScrollableZone && Math.abs(distanceX) > Math.abs(distanceY)) return

      event.preventDefault()
    }

    const handleTouchEnd = (event) => {
      if (isInsideServiceModal(event.target)) return

      const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX
      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY
      const horizontalDistance = touchStartX - touchEndX
      const distance = touchStartY - touchEndY

      if (touchStartedInScrollableZone && Math.abs(horizontalDistance) > Math.abs(distance)) return

      if (verticalScrollableElement) {
        const { scrollTop, scrollHeight, clientHeight } = verticalScrollableElement
        const atTop = scrollTop <= 2
        const atBottom = scrollTop + clientHeight >= scrollHeight - 2
        const isContactScene = verticalScrollableElement.classList.contains('slogan')

        if (isContactScene && Math.abs(distance) > 42 && distance < 0) {
          goToScene(activeScene - 1)
          verticalScrollableElement = null
          return
        }

        if (Math.abs(distance) > 42 && ((distance < 0 && atTop) || (distance > 0 && atBottom))) {
          goToScene(activeScene + (distance > 0 ? 1 : -1))
        }

        verticalScrollableElement = null
        return
      }

      if (Math.abs(distance) > 42) {
        goToScene(activeScene + (distance > 0 ? 1 : -1))
      }
    }

    const handleKeyDown = (event) => {
      if (document.querySelector('.service-modal')) return

      const nextKeys = ['ArrowDown', 'PageDown', 'Space']
      const previousKeys = ['ArrowUp', 'PageUp']

      if (nextKeys.includes(event.code)) {
        event.preventDefault()
        goToScene(activeScene + 1)
      }

      if (previousKeys.includes(event.code)) {
        event.preventDefault()
        goToScene(activeScene - 1)
      }

      if (event.code === 'Home') {
        event.preventDefault()
        goToScene(0)
      }

      if (event.code === 'End') {
        event.preventDefault()
        goToScene(panels.length - 1)
      }
    }

    const handleAnchorClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]')
      const hash = link?.getAttribute('href')

      if (!hash || SCENES[hash] === undefined) return

      event.preventDefault()
      goToScene(SCENES[hash])
    }

    resetToHero()

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.clearTimeout(transitionTimer)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleAnchorClick)
      window.history.scrollRestoration = previousScrollRestoration
      html.classList.remove('scene-fullpage')
      body.classList.remove('scene-fullpage')
      panels.forEach(cleanPanel)
    }
  }, [])

  return null
}

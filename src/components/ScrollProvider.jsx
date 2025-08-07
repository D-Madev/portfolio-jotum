// src/components/ScrollManager.jsx
import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function ScrollManager({ children }) {
  const containerRef = useRef(null)
  const locoRef = useRef(null)
  const { pathname } = useLocation()

  // 1) Inicializo locomotive sólo al montar
  useEffect(() => {
    locoRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.2,
      inertia: 0.8,
    })
    window.locoScroll = locoRef.current
    return () => locoRef.current.destroy()
  }, [])

  // 2) Al cambiar de ruta, actualizo y voy al top
  useEffect(() => {
    if (!locoRef.current) return
    locoRef.current.update()
    locoRef.current.scrollTo(0, {
      duration: 0,
      disableLerp: true
    })
  }, [pathname])

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  )
}

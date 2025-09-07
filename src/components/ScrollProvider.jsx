// src/components/ScrollProvider.jsx
import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function ScrollProvider({
  children,
  // rutas donde NO queremos que locomotive esté activo (por defecto '/nosotros')
  excludePaths = ['/nosotros']
}) {
  const containerRef = useRef(null)
  const locoRef = useRef(null)
  const { pathname } = useLocation()

  // Inicializo / destruyo locomotive según la ruta actual
  useEffect(() => {
    // helper: si la ruta actual está en la lista de exclusión
    const isExcluded = excludePaths.some(p => pathname.startsWith(p))

    // Si está excluida y ya existe instancia, la destruyo
    if (isExcluded) {
      if (locoRef.current) {
        try {
          locoRef.current.destroy()
        } catch (e) {
          console.warn('Error al destruir locomotive:', e)
        }
        locoRef.current = null
        window.locoScroll = null
      }

      // Forzamos el scroll nativo arriba para rutas excluidas
      // usamos setTimeout 0 para asegurarnos de que el DOM haya sido actualizado
      setTimeout(() => {
        try {
          window.scrollTo(0, 0)
        } catch (e) {
          /* noop */
        }
      }, 0)
      
      return // no inicializamos nada en rutas excluidas
    }

    // Si ya está inicializado, solo actualizamos
    if (locoRef.current) {
      locoRef.current.update()
      window.locoScroll = locoRef.current
      return
    }

    // Inicializo locomotive
    locoRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.2,
      inertia: 0.8,
    })
    window.locoScroll = locoRef.current

    // Listener de resize para mantener actualizado el layout
    const onResize = () => locoRef.current && locoRef.current.update()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (locoRef.current) {
        try {
          locoRef.current.destroy()
        } catch (e) {
          console.warn('Error al destruir locomotive en cleanup:', e)
        }
        locoRef.current = null
        window.locoScroll = null
      }
    }
  }, [pathname, excludePaths])

  // Mantengo el comportamiento que ya tenías: al cambiar de ruta hago update y scrollTo top (si loco existe)
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

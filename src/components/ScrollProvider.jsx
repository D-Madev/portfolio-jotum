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

    const forceTopAll = () => {
      const html = document.documentElement
      const prevSB = html.style.scrollBehavior
      html.style.scrollBehavior = 'auto'

      if (window?.locoScroll?.scrollTo) {
        try { window.locoScroll.scrollTo(0, { duration: 0, disableLerp: true }) } catch (e) { console.warn(e) }
      }
      try { document.documentElement.scrollTop = 0 } catch {}
      try { document.body.scrollTop = 0 } catch {}
      if (document.scrollingElement) try { document.scrollingElement.scrollTop = 0 } catch {}
      if (containerRef.current) try { containerRef.current.scrollTop = 0; containerRef.current.style.transform = 'none'; } catch {}

      // restaurar
      html.style.scrollBehavior = prevSB
    }

    // Si está excluida y ya existe instancia, la destruyo
    if (isExcluded) {
      if (locoRef.current) {
        try { locoRef.current.destroy() } catch (e) { console.warn('Error al destruir locomotive:', e) }
        locoRef.current = null
        window.locoScroll = null
      }

       try { document.documentElement.style.removeProperty('overflow') } catch {}
      try { document.body.style.removeProperty('overflow') } catch {}
      if (containerRef.current) {
        try {
          containerRef.current.style.transform = containerRef.current.style.transform || 'none'
          containerRef.current.style.position = containerRef.current.style.position || ''
        } catch {}
      }
      requestAnimationFrame(() => {
        forceTopAll()
        setTimeout(forceTopAll, 30)
        setTimeout(forceTopAll, 120)
      })

      return
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
        try { locoRef.current.destroy() } catch (e) { console.warn('Error al destruir locomotive en cleanup:', e) }
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

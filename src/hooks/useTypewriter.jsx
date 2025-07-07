import { useEffect, useState } from 'react'

/**
 * Hook personalizado que simula el efecto de máquina de escribir.
 * 
 * @param {string} text - El texto completo que se va a mostrar.
 * @param {number} speed - Intervalo en milisegundos entre cada carácter (velocidad de escritura).
 * @param {boolean} start - Si es true, inicia el efecto de tipeo; si es false, no muestra nada.
 * @returns {string} - El texto que se va mostrando progresivamente.
 */
export function useTypewriter(text = "", speed = 0, start = false) {
  // Estado para almacenar el texto que se va mostrando carácter por carácter
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    // Si no se debe iniciar el efecto, salir inmediatamente
    if (!start) return
    
    // Reinicia el índice y el texto mostrado
    let i = 0;
    setDisplayed("");
    // Crea un intervalo que actualiza el texto mostrado cada 'speed' ms
    const handle = setInterval(() => {
      setDisplayed(text.slice(0, ++i))
      // Cuando se ha mostrado todo el texto, limpia el intervalo
      if (i === text.length) {
        clearInterval(handle)
      }
    }, speed);
    // Limpia el intervalo si cambian las dependencias o se desmonta el componente
    return () => clearInterval(handle)
  }, [text, speed, start])

  // Devuelve el texto mostrado hasta el momento
  return displayed
}
import { useEffect, useState } from 'react'

const steps = [
  'INITIALIZING WORLD',
  'LOADING EXPERIENCE',
  'CONNECTING PROJECTS',
  'COMPILING SHADERS',
  'READY'
]

type Props = { onDone: () => void }

export function LoadingSequence({ onDone }: Props) {
  const [index, setIndex] = useState(0)
  const [terminal, setTerminal] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => {
        if (v >= steps.length - 1) {
          clearInterval(timer)
          setTimeout(() => setTerminal(true), 450)
          setTimeout(onDone, 2400)
          return v
        }
        return v + 1
      })
    }, 420)

    return () => clearInterval(timer)
  }, [onDone])

  return (
    <div className="loading-screen" aria-live="polite">
      {!terminal ? (
        <p className="loading-text">{steps[index]}</p>
      ) : (
        <div className="terminal-intro">
          <p>&gt; whoami</p>
          <h1>VIGNESH PALANICHAMY</h1>
          <h2>FULL STACK × CREATIVE DEVELOPER</h2>
          <p>I BUILD DIGITAL PRODUCTS, SYSTEMS & INTERACTIVE EXPERIENCES.</p>
        </div>
      )}
    </div>
  )
}

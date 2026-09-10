import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) return

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
    }

    const enter = (event: Event) => {
      const target = event.target as HTMLElement
      const action = target.dataset.cursor || ''
      setLabel(action)
      cursor.dataset.label = action
    }

    const leave = () => {
      setLabel('')
      cursor.dataset.label = ''
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll<HTMLElement>('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll<HTMLElement>('[data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
      cursor.remove()
    }
  }, [])

  return <span className="sr-only">{label}</span>
}

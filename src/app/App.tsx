import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { AppShell } from '../components/layout/AppShell'
import { CustomCursor } from '../components/ui/CustomCursor'
import { LoadingSequence } from '../components/ui/LoadingSequence'
import { SceneCanvas } from '../experience/canvas/SceneCanvas'
import { HeroSection } from '../sections/hero/HeroSection'
import { AboutSection } from '../sections/about/AboutSection'
import { ExperienceSection } from '../sections/experience/ExperienceSection'
import { SkillsSection } from '../sections/skills/SkillsSection'
import { ProjectsSection } from '../sections/projects/ProjectsSection'
import { EducationSection } from '../sections/education/EducationSection'
import { ContactSection } from '../sections/contact/ContactSection'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { getDeviceTier } from '../lib/deviceTier'

gsap.registerPlugin(ScrollTrigger)

export function App() {
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const journeyRef = useRef({ value: 0 })

  const deviceTier = useMemo(() => getDeviceTier(), [])
  const lowQuality = deviceTier === 'desktop-low' || deviceTier === 'mobile-low'
  const disableWebgl = reducedMotion && deviceTier.startsWith('mobile')

  useEffect(() => {
    const lenis = new Lenis({
      lerp: reducedMotion ? 0.25 : 0.12,
      smoothWheel: !reducedMotion
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        journeyRef.current.value = self.progress
        setProgress(self.progress)
      }
    })

    return () => {
      trigger.kill()
      lenis.destroy()
    }
  }, [reducedMotion])

  return (
    <>
      {!ready ? <LoadingSequence onDone={() => setReady(true)} /> : null}
      <CustomCursor />
      {!disableWebgl ? <SceneCanvas progress={progress} reducedMotion={reducedMotion} lowQuality={lowQuality} /> : <div className="scene-fallback" aria-hidden="true" />}
      <AppShell>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </AppShell>
    </>
  )
}

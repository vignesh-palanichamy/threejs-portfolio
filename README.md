# Vignesh Palanichamy — Digital Workspace Portfolio

Premium cinematic developer portfolio built with React, TypeScript, Three.js, React Three Fiber, GSAP ScrollTrigger, and Lenis.

## Highlights

- Cinematic loading + terminal intro sequence
- Continuous scroll-driven 3D camera journey across sections
- Layered WebGL workspace scene with atmospheric lighting and procedural particles
- Editorial section system: intro, about, experience, skills, project universe, education, achievements, contact outro
- Interactive project case study overlay transitions
- Adaptive quality strategy for lower-end devices and reduced-motion fallback
- Desktop custom cursor interactions
- SEO metadata, OpenGraph tags, and JSON-LD person schema

## Stack

- React + TypeScript + Vite
- Three.js + @react-three/fiber + @react-three/drei
- GSAP + ScrollTrigger
- Lenis
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  app/
  components/
    layout/
    navigation/
    ui/
  experience/
    canvas/
    scenes/
  sections/
    hero/
    about/
    experience/
    skills/
    projects/
    education/
    contact/
  data/
  hooks/
  lib/
  styles/
```

## Notes

- Contact links are centralized in `src/data/portfolio.ts` for easy update.
- Scene complexity scales down on lower-end devices.
- For strict resume accuracy, only provided factual profile/work/education details are used.

import { createScene } from './scene'
import { createCamera } from './camera'
import { createRenderer } from './renderer'
import { createControls } from './controls'
import { addLights } from './lighting'
import { createHeroShapes } from './shapes'
import { createStarfield } from './stars'

export function initPortfolioScene({ canvas, sections }) {
  if (!canvas) return

  const scene = createScene()
  const camera = createCamera(window.innerWidth / window.innerHeight)
  const renderer = createRenderer(canvas)
  const controls = createControls(camera, canvas)

  addLights(scene)
  const stars = createStarfield(scene)
  const { group, torus, sphere, octa, projectCardGroup } = createHeroShapes(scene)

  const scrollState = { progress: 0 }

  const updateScrollProgress = () => {
    const sectionArray = [...sections]
    if (!sectionArray.length) return

    const viewportMid = window.scrollY + window.innerHeight / 2
    const step = sectionArray.findIndex((section) => {
      const top = section.offsetTop
      const bottom = top + section.offsetHeight
      return viewportMid >= top && viewportMid < bottom
    })

    scrollState.progress = step === -1 ? sectionArray.length - 1 : step
  }

  updateScrollProgress()
  window.addEventListener('scroll', updateScrollProgress)

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  window.addEventListener('resize', onResize)

  const animate = () => {
    requestAnimationFrame(animate)

    torus.rotation.x += 0.01
    torus.rotation.y += 0.012
    sphere.rotation.y += 0.009
    sphere.rotation.z += 0.004
    octa.rotation.x += 0.006
    octa.rotation.y -= 0.008

    projectCardGroup.rotation.y += 0.003
    stars.rotation.y += 0.0005

    const targetY = 1.5 - scrollState.progress * 0.95
    const targetZ = 9 - scrollState.progress * 0.35
    camera.position.y += (targetY - camera.position.y) * 0.035
    camera.position.z += (targetZ - camera.position.z) * 0.035

    group.rotation.y += 0.0015

    controls.update()
    renderer.render(scene, camera)
  }

  animate()
}

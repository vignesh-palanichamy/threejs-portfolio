import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.enablePan = false
  controls.minDistance = 6
  controls.maxDistance = 14
  controls.maxPolarAngle = Math.PI * 0.58
  return controls
}

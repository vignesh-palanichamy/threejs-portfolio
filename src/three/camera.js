import * as THREE from 'three'

export function createCamera(aspect) {
  const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 100)
  camera.position.set(0, 1.6, 9)
  return camera
}

import * as THREE from 'three'

export function addLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.55)
  const directional = new THREE.DirectionalLight(0x7dd3fc, 1.2)
  directional.position.set(4, 7, 3)

  const point = new THREE.PointLight(0xa78bfa, 60, 30)
  point.position.set(-4, 3, 5)

  scene.add(ambient, directional, point)
}

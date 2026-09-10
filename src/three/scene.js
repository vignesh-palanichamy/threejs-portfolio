import * as THREE from 'three'

export function createScene() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x030712)
  scene.fog = new THREE.Fog(0x030712, 8, 28)
  return scene
}

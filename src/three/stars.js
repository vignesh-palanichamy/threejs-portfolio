import * as THREE from 'three'

export function createStarfield(scene) {
  const count = 1800
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i += 1) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 50
    positions[i3 + 1] = (Math.random() - 0.5) * 30
    positions[i3 + 2] = -Math.random() * 50
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.06,
    transparent: true,
    opacity: 0.85
  })

  const stars = new THREE.Points(geometry, material)
  scene.add(stars)
  return stars
}

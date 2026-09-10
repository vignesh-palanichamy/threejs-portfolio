import * as THREE from 'three'

export function createHeroShapes(scene) {
  const group = new THREE.Group()

  const materialA = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.5, roughness: 0.2 })
  const materialB = new THREE.MeshStandardMaterial({ color: 0xa78bfa, metalness: 0.35, roughness: 0.25 })
  const materialC = new THREE.MeshStandardMaterial({ color: 0xf472b6, metalness: 0.4, roughness: 0.2 })

  const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.35, 120, 14), materialA)
  torus.position.x = -2.2

  const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), materialB)
  sphere.position.x = 0.8

  const octa = new THREE.Mesh(new THREE.OctahedronGeometry(1.1), materialC)
  octa.position.x = 3.1

  const projectCardGroup = new THREE.Group()
  const cardGeometry = new THREE.BoxGeometry(1.5, 0.9, 0.2)
  const cardMaterial = new THREE.MeshStandardMaterial({ color: 0x1f2937, emissive: 0x111827, metalness: 0.2, roughness: 0.65 })

  for (let i = 0; i < 3; i += 1) {
    const card = new THREE.Mesh(cardGeometry, cardMaterial.clone())
    card.material.color.offsetHSL(i * 0.06, 0, 0.03)
    card.position.set(-2 + i * 2, -2.7, -1.2)
    card.rotation.y = (i - 1) * 0.25
    projectCardGroup.add(card)
  }

  group.add(torus, sphere, octa, projectCardGroup)
  scene.add(group)

  return { group, torus, sphere, octa, projectCardGroup }
}

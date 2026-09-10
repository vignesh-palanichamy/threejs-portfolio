import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type Props = { progress: number; reducedMotion: boolean; lowQuality: boolean }

export function WorkspaceScene({ progress, reducedMotion, lowQuality }: Props) {
  const group = useRef<THREE.Group>(null)
  const nodes = useRef<THREE.Group>(null)
  const points = useRef<THREE.Points>(null)
  const { camera } = useThree()

  const starGeo = useMemo(() => {
    const count = lowQuality ? 500 : 1400
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 42
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = -Math.random() * 45
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [lowQuality])

  useFrame((_, delta) => {
    const damp = reducedMotion ? 0.02 : 0.08
    const p = progress

    camera.position.x += ((Math.sin(p * Math.PI * 1.2) * 1.2) - camera.position.x) * damp
    camera.position.y += ((1.4 - p * 1.45) - camera.position.y) * damp
    camera.position.z += ((9 - p * 4.1) - camera.position.z) * damp
    camera.lookAt(0, -0.25 - p * 0.5, -4)

    if (group.current) {
      group.current.rotation.y += delta * (reducedMotion ? 0.04 : 0.09)
      group.current.position.y = Math.sin(p * 5) * 0.12
    }

    if (nodes.current) {
      nodes.current.rotation.y = p * 1.2
      nodes.current.rotation.x = Math.sin(p * Math.PI) * 0.15
    }

    if (points.current) {
      points.current.rotation.y += delta * 0.015
      points.current.rotation.x = p * 0.1
    }
  })

  return (
    <>
      <color attach="background" args={['#06070b']} />
      <fog attach="fog" args={['#06070b', 8, 26]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 7, 4]} intensity={1.1} color="#86b4ff" />
      <pointLight position={[-5, 2, 4]} intensity={32} distance={24} color="#f4cf9e" />

      <group ref={group}>
        <mesh position={[-2, 0, -3]}>
          <torusKnotGeometry args={[0.85, 0.28, 120, 14]} />
          <meshStandardMaterial color="#6ca5ff" metalness={0.6} roughness={0.25} />
        </mesh>
        <mesh position={[0.6, 0.1, -4.2]}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial color="#b0b8c7" metalness={0.45} roughness={0.32} />
        </mesh>
        <mesh position={[3.2, -0.1, -5.1]} rotation={[0.3, 0.4, 0]}>
          <boxGeometry args={[1.8, 1.1, 0.15]} />
          <meshStandardMaterial color="#10131a" metalness={0.2} roughness={0.7} emissive="#1a2030" />
        </mesh>
      </group>

      <group ref={nodes} position={[0, -2.2, -6]}>
        {new Array(10).fill(0).map((_, index) => (
          <mesh key={index} position={[Math.sin(index) * 3, Math.cos(index * 1.3) * 1.2, index * -0.7]}>
            <octahedronGeometry args={[0.17, 0]} />
            <meshStandardMaterial color="#87aefc" emissive="#13203f" />
          </mesh>
        ))}
      </group>

      <points ref={points} geometry={starGeo} frustumCulled>
        <pointsMaterial size={lowQuality ? 0.03 : 0.05} color="#cfd9ff" transparent opacity={0.8} />
      </points>
    </>
  )
}

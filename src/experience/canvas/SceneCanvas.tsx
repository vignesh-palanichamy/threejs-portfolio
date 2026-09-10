import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr } from '@react-three/drei'
import { WorkspaceScene } from '../scenes/WorkspaceScene'

type Props = {
  progress: number
  reducedMotion: boolean
  lowQuality: boolean
}

export function SceneCanvas({ progress, reducedMotion, lowQuality }: Props) {
  return (
    <div className="scene-layer" aria-hidden="true">
      <Canvas camera={{ fov: 50, position: [0, 1.4, 9] }} dpr={lowQuality ? [1, 1.2] : [1, 1.8]} gl={{ antialias: !lowQuality }}>
        <Suspense fallback={null}>
          <WorkspaceScene progress={progress} reducedMotion={reducedMotion} lowQuality={lowQuality} />
        </Suspense>
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  )
}

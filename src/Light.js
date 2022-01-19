import * as THREE from 'three'
import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Html } from '@react-three/drei'

import useStore from './Store'

export default function Light() {
  const directionalLightRef = useRef()
  const dummy = new THREE.Vector3()
  const imageSelected = useStore((state) => state.imageSelected)
  const isMobile = useStore((state) => state.isMobile)

  const lightIntensity = isMobile ? 0.5 : 0.7
  const step = 0.1

  useFrame((state, delta) => {
    // directionalLightRef.current.position.lerp(dummy.set(imageSelected ? 4 : 0, imageSelected ? 3 : 8, imageSelected ? 3 : 5), step)
  })

  return (
    <>
      {/* Plane 3 */}
      <directionalLight ref={directionalLightRef} position={[0, 8, 5]} castShadow intensity={lightIntensity} shadow-camera-far={70} />
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
      </Suspense>
    </>
  )
}

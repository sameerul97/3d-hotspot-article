import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

const titleMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#000').convertSRGBToLinear(),
  metalness: 5.8,
  roughness: 0.5,
  envMapIntensity: 0.65
})

export default function Title() {
  const titleScene = useGLTF('/jl.glb')

  return (
    <mesh
      castShadow
      geometry={titleScene.nodes['Text'].geometry}
      rotation-z={-Math.PI / 3}
      rotation-x={1.5707963267948966}
      rotation-y={0}
      position={[-3, 2.75, 4]}
      material={titleMaterial}
      scale={1.2}
    />
  )
}

import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { useTexture, Plane } from '@react-three/drei'

export default function Wall({ children, ...props }) {
  const wallTextures = useTexture([
    '/marbles/White_Marble_004_COLOR.jpg',
    '/marbles/White_Marble_004_OCC.jpg',
    '/marbles/White_Marble_004_NORM.jpg',
    '/marbles/White_Marble_004_DISP.png',
    '/marbles/White_Marble_004_ROUGH.jpg'
  ])

  const [WallcolorMap, WallaoMap, WallnormalMap, WalldisplacementMap, WallroughnessMap] = wallTextures

  useLayoutEffect(() => {
    wallTextures.forEach((walltexture) => {
      walltexture.wrapT = walltexture.wrapS = THREE.RepeatWrapping
      walltexture.repeat.set(0.45, 1)
    })
  }, [wallTextures])

  return (
    <group dispose={null}>
      <Plane receiveShadow castShadow {...props}>
        <meshStandardMaterial
          attach="material"
          color={'white'}
          metalness={0.1}
          roughness={0.5}
          map={WallcolorMap}
          displacementScale={0}
          displacementMap={WalldisplacementMap}
          normalMap={WallnormalMap}
          roughnessMap={WallroughnessMap}
          aoMap={WallaoMap}
          envMapIntensity={0.5}
          lightIntensity={0}
        />
        {children && children}
      </Plane>
    </group>
  )
}

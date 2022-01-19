import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { useTexture, RoundedBox } from '@react-three/drei'
import useStore from '../Store'
import { IMAGE_PATH } from '../utils/Helper'

export default function MarbleWall({ children, ...props }) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <group dispose={null}>
        <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} {...props}>
          <meshStandardMaterial attach="material" color={'white'} metalness={1.7} roughness={0.3} />
          {children && children}
        </RoundedBox>
      </group>
    )
  }
  const galleryPlaneTextures = useTexture([
    IMAGE_PATH + '/marbles/White_Marble_004_COLOR.jpg',
    IMAGE_PATH + '/marbles/White_Marble_004_OCC.jpg',
    IMAGE_PATH + '/marbles/White_Marble_004_NORM.jpg',
    IMAGE_PATH + '/marbles/White_Marble_004_DISP.png',
    IMAGE_PATH + '/marbles/White_Marble_004_ROUGH.jpg'
  ])
  const [colorMap, aoMap, normalMap, displacementMap, roughnessMap] = galleryPlaneTextures

  useLayoutEffect(() => {
    galleryPlaneTextures.forEach((texture) => {
      texture.wrapT = texture.wrapS = THREE.RepeatWrapping
      // texture.repeat.set(1, 1)
      texture.repeat.set(0.35, 0.6)
    })
  }, [galleryPlaneTextures])

  return (
    <group dispose={null}>
      <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} {...props}>
        <meshStandardMaterial
          // attach="material"
          // color={'white'}
          // metalness={1.7}
          // roughness={0.1}
          metalness={0.1}
          roughness={0.5}
          map={colorMap}
          displacementScale={0}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
          envMapIntensity={0.5}
          lightIntensity={0}
        />
        {children && children}
      </RoundedBox>
    </group>
  )
}

import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { useTexture, RoundedBox } from '@react-three/drei'

import { IMAGE_PATH } from '../../utils/Helper'

export default function Floor({ color, ...props }) {
  const textures = useTexture([
    IMAGE_PATH + '/tiles/Tiles_048_basecolor.jpg',
    IMAGE_PATH + '/tiles/Tiles_048_ambientOcclusion.jpg',
    IMAGE_PATH + '/tiles/Tiles_048_normal.jpg',
    IMAGE_PATH + '/tiles/Tiles_048_height.png',
    IMAGE_PATH + '/tiles/Tiles_048_roughness.jpg',
    IMAGE_PATH + '/tiles/Tiles_048_metallic.jpg'
  ])

  const [colorMap, aoMap, normalMap, displacementMap, roughnessMap, metalnessMap] = textures

  useLayoutEffect(() => {
    textures.forEach((texture) => {
      texture.wrapT = texture.wrapS = THREE.RepeatWrapping
      texture.repeat.set(0.3, 4)
    })
  }, [textures])

  return (
    <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} {...props}>
      <meshStandardMaterial
        attach="material"
        color={color}
        metalness={0.7}
        roughness={2}
        map={colorMap}
        displacementScale={0}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        metalnessMap={metalnessMap}
        aoMap={aoMap}
        lightIntensity={0}
      />
    </RoundedBox>
  )
}

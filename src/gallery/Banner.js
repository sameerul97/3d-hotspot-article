import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, RoundedBox } from '@react-three/drei'

import { IMAGE_PATH } from '../utils/Helper'

export default function Banner({ ...props }) {
  const look1Texture = useTexture(IMAGE_PATH + '/look1.jpg')
  const banner1Ref = useRef()
  const [hovered, hover] = useState(false)

  const over = () => hover(true)
  const out = () => hover(false)
  const clicked = () => hover((prev) => !prev)

  useEffect(() => {
    look1Texture.wrapT = look1Texture.wrapS = THREE.RepeatWrapping
    look1Texture.minFilter = THREE.LinearMipmapLinearFilter
    look1Texture.magFilter = THREE.NearestFilter
    look1Texture.repeat.set(0.063, 1.05)
    look1Texture.offset.set(0, 0.1)
    look1Texture.anisotropy = 16
    look1Texture.encoding = THREE.sRGBEncoding
  }, [look1Texture])

  useFrame(({ clock }) => {
    if (look1Texture.offset.x < 0.51) {
      look1Texture.offset.x += 0.0015
      return
    }
    if (look1Texture.offset.x >= 0.51 && look1Texture.offset.x > 0.063) {
      look1Texture.offset.x = 0
      return
    }
  })

  return (
    <RoundedBox
      ref={banner1Ref}
      args={[8, 1, 0.02]}
      smoothness={5}
      radius={0.08}
      rotation-x={Math.PI / 2}
      rotation-y={Math.PI / 2}
      rotation-z={-Math.PI / 2}
      position={[-1.5, 5.2, 3.51]}
      onClick={clicked}
      castShadow
      receiveShadow>
      <meshStandardMaterial color="#fff" metalness={1.2} roughness={0.4} map={look1Texture} lightIntensity={0} envMapIntensity={1} />
    </RoundedBox>
  )
}

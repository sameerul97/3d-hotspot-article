import * as THREE from 'three'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, useCursor, Html } from '@react-three/drei'

import useStore from '../../store'

export default function GalleryCloud({ image, ...props }) {
  const ref = useRef()
  const [texture1] = useTexture(['/cloud-texture-4.png'])

  return (
    <mesh {...props}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={'white'} transparent={true} opacity={0.75} map={texture1} envMapIntensity={0.65} lightIntensity={0.2} />
    </mesh>
  )
}

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import useStore from './Store'
import { damp } from './utils'

export default function Rig() {
  const imageSelected = useStore((state) => state.imageSelected)
  const hotspotSelected = useStore((state) => state.hotspotSelected)
  const isMobile = useStore((state) => state.isMobile)

  const step = 4

  return useFrame((state, delta) => {
    state.camera.fov = THREE.MathUtils.damp(state.camera.fov, imageSelected ? 10 : 42, step, delta)

    if (isMobile) {
      damp(state.camera.position, [imageSelected ? 25 : 10, imageSelected ? 5 : 5, imageSelected ? 0 : 10], step, delta)
    } else {
      damp(
        state.camera.position,
        [imageSelected ? 25 : state.mouse.x * 3.5 + 8, imageSelected ? 3 : state.mouse.y * 2.8 + 6, imageSelected ? 0 : 10],
        step,
        delta
      )

      if (hotspotSelected) {
        damp(state.camera.position, [35, -15, 0], step, delta)
      }
    }

    state.camera.lookAt(0, 1.2, 0)
    state.camera.updateProjectionMatrix()
  })
}

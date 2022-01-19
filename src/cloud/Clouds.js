import React, { Suspense } from 'react'
import { Cloud } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'

import useStore from '../Store'
import GalleryCloud from './GalleryCloud'

const AnimCloud = animated(Cloud)

export default function Clouds() {
  const isMobile = useStore((state) => state.isMobile)
  const imageSelected = useStore((state) => state.imageSelected)
  const gallerySectionPosition = useStore((state) => state.gallerySectionPosition)

  const { pZ } = useSpring({ pZ: imageSelected ? -18 : -15 })
  const { pZ2 } = useSpring({ pZ2: imageSelected ? -18 : -25 })

  const [{ gallerySectionPositionSpring }] = useSpring({ gallerySectionPositionSpring: gallerySectionPosition, config: config.slow }, [
    gallerySectionPosition
  ])
  const pX = gallerySectionPositionSpring.to([1, 2, 3], [-1, -2, 2])

  if (isMobile) {
    // return (
    //   <Suspense fallback={null}>
    //     <Cloud position={[-30, 2, -40]} speed={0.5} opacity={1} segments={5} />
    //   </Suspense>
    // )
    return <React.Fragment></React.Fragment>
  }

  if (!isMobile)
    return (
      <Suspense fallback={null}>
        <AnimCloud
          position={[-1, 1, -35]}
          // position-x={-pX}
          position-y={1}
          position-z={-35}
          speed={0}
          opacity={0.5}
          segments={20}
          width={8}
          length={0.5}
        />
        <AnimCloud
           position={[1, 2, -18]}
          // position-x={pX}
          position-y={2}
          position-z={-18}
          speed={0}
          opacity={1}
          segments={20}
          width={15}
        />

        <AnimCloud position-x={-50} position-y={2} position-z={pZ} speed={0} width={15} opacity={1} segments={20} />
      </Suspense>
    )
}

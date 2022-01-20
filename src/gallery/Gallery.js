import React, { Suspense } from 'react'
import { Html } from '@react-three/drei'
import { a as aThree } from '@react-spring/three'

import useStore from '../Store'

import MarbleWall from './MarbleWall'
import GalleryImage from './GalleryImage'
import Floor from './Floor'

export default function Gallery({ images, ...props }) {
  const imageSelected = useStore((state) => state.imageSelected)
  const setHotspotSelected = useStore((state) => state.setHotspotSelected)

  // const hotspotClick = (e, id) => {
  //   e.stopPropagation()
  //   setHotspotSelected()
  // }

  return (
    <aThree.group {...props}>
      <Suspense fallback={null}>
        <Floor color="#fff" rotation-x={-Math.PI / 2} position-z={-7} scale={[4, 40, 0.2]} />

        <MarbleWall rotation-x={-Math.PI / 2} position={[-1.7, 2.2, 3.5]} scale={[0.3, 3, 4]}>
          <GalleryImage
            rotation-y={Math.PI / 2}
            rotation-z={Math.PI / 2}
            position-x={0.51}
            scale={[0.8, 0.85, 4]}
            image={images[0].src}
            name={images[0].id}
            hotspots={images[0].hotspots}
          />
        </MarbleWall>

        <MarbleWall rotation-x={-Math.PI / 2} position={[-1.7, 2.2, -6.5]} scale={[0.3, 3, 4]}>
          <GalleryImage
            rotation-y={Math.PI / 2}
            rotation-z={Math.PI / 2}
            position-x={0.51}
            scale={[0.8, 0.85, 4]}
            image={images[1].src}
            name={images[1].id}
            hotspots={images[1].hotspots}
          />
        </MarbleWall>

        <MarbleWall rotation-x={-Math.PI / 2} position={[-1.7, 2.2, -20]} scale={[0.3, 3, 4]}>
          <GalleryImage
            rotation-y={Math.PI / 2}
            rotation-z={Math.PI / 2}
            position-x={0.51}
            scale={[0.8, 0.85, 4]}
            image={images[2].src}
            name={images[2].id}
            hotspots={images[2].hotspots}
          />
        </MarbleWall>
      </Suspense>
    </aThree.group>
  )
}

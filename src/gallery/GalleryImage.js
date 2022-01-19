import * as THREE from 'three'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, useCursor, Html } from '@react-three/drei'

import useStore from '../Store'
import { IMAGE_PATH } from '../utils/Helper'

export default function GalleryImage({ image, hotspots, ...props }) {
  const ref = useRef()
  const [texture1, dispTexture] = useTexture([IMAGE_PATH + image, IMAGE_PATH + '/Marble_Tiles_001_height.png'])
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)

  const imageSelected = useStore((state) => state.imageSelected)
  const isMobile = useStore((state) => state.isMobile)

  const setImageSelected = useStore((state) => state.setImageSelected)
  const setHotspotSelected = useStore((state) => state.setHotspotSelected)
  const setSelectedHotspotData = useStore((state) => state.setSelectedHotspotData)

  useLayoutEffect(() => {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping
    texture1.minFilter = THREE.LinearMipmapLinearFilter
    texture1.magFilter = THREE.NearestFilter
    texture1.dithering = true
    texture1.encoding = THREE.sRGBEncoding
  }, [texture1])

  useCursor(imageSelected)
  useEffect(() => void (document.body.style.cursor = hovered && !imageSelected ? 'pointer' : 'auto'), [hovered])

  const hotspotClick = (e, hotspot) => {
    e.stopPropagation()
    setHotspotSelected()
    setSelectedHotspotData(hotspot)
  }

  const Hotspot = ({ hotspot }) => (
    <mesh position={hotspot.position}>
      <Html distanceFactor={10}>
        <div onClick={(e) => hotspotClick(e, hotspot)} data-hotspotid={hotspot.id}>
          <span data-icon="text" className="hotspot-icon-null hotspot">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path d="M11.5 11.5h2v6h-2zM11.5 7.5h2v2h-2z"></path>
            </svg> */}
          </span>
        </div>
      </Html>
    </mesh>
  )

  const DesktopHotspot = () => (
    <React.Fragment>
      {imageSelected && (
        <React.Fragment>
          {hotspots.map((hotspot) => (
            <Hotspot hotspot={hotspot} key={hotspot.id} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  )

  const MobileHotspot = () => (
    <React.Fragment>
      {clicked && (
        <React.Fragment>
          {hotspots.map((hotspot) => (
            <Hotspot hotspot={hotspot} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  )

  const ImageClicked = (e) => {
    e.stopPropagation()

    if (imageSelected) return

    setImageSelected()
    setClicked((clicked) => !clicked)
  }

  return (
    <mesh onPointerMove={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} onClick={ImageClicked} {...props}>
      <planeGeometry />
      <meshStandardMaterial color={'white'} map={texture1} envMapIntensity={0.65} lightIntensity={0.2} />
      {imageSelected && <CloseButton position={[0.42, 0.49, 0]} setClicked={setClicked} />}
      {isMobile ? <MobileHotspot /> : <DesktopHotspot />}
    </mesh>
  )
}

function CloseButton({ setClicked, ...props }) {
  const setImageSelected = useStore((state) => state.setImageSelected)

  const closeClick = (e, hotspot) => {
    e.stopPropagation()

    setImageSelected()
    setClicked((clicked) => !clicked)
  }

  return (
    <Html distanceFactor={10} {...props}>
      <span data-icon="text" className="close" onClick={closeClick}></span>
    </Html>
  )
}

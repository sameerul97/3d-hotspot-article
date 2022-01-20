import * as THREE from 'three'
import React, { useState, Suspense, useEffect, useLayoutEffect, Fragment } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Loader, Sky } from '@react-three/drei'
import { useGLTF, useDetectGPU } from '@react-three/drei'
import { a as aThree } from '@react-spring/three'
import { config } from '@react-spring/web'
import { useSpring } from '@react-spring/core'

const AnimSky = aThree(Sky)

import useStore from './Store'
import Rig from './Rig'
import Light from './Light'
import InfoPanel from './InfoPanel'
import Gallery from './gallery/Gallery'
import GalleryImageControls from './controls/GalleryImageControls'
import GallerySectionControls from './controls/GallerySectionControls'

import Clouds from './cloud/Clouds'
import Title from './gallery/Title'
import Intro from './Intro'
import DeviceInfo from './DeviceInfo'

import GalleryStore from './data/index'

window.GalleryStore = GalleryStore

const stationNavBarHeight = 76.09
const raidoBarHeight = 94

export default function App() {
  const GPUTier = useDetectGPU()

  const [ready, setReady] = useState(false)
  const [start, setStart] = useState(false)

  const isMobile = useStore((state) => state.isMobile)
  const clientheight = useStore((state) => state.clientheight)

  const setIsMobile = useStore((state) => state.setIsMobile)
  const setClientHeight = useStore((state) => state.setClientHeight)

  const [dpr, setDpr] = useState([1, 1])
  useEffect(() => {
    if (GPUTier.tier === '0' || GPUTier.isMobile) {
      setIsMobile(true)
      setDpr([1.5, 1.9])
      // setDpr([1, 1])
    } else if (GPUTier.tier === '3') {
      setIsMobile(false)
      setDpr([2.25, 2.25])
    } else {
      setIsMobile(false)
      // setDpr([1, 1.7])
      setDpr([1, 1.3])
    }

    setReady(true)
  }, [])

  const galleryImagePosition = useStore((state) => state.galleryImagePosition)
  const gallerySectionPosition = useStore((state) => state.gallerySectionPosition)

  const [{ galleryImagePositionSpring }] = useSpring({ galleryImagePositionSpring: galleryImagePosition, config: config.slow }, [
    galleryImagePosition
  ])

  const [{ gallerySectionPositionSpring }] = useSpring({ gallerySectionPositionSpring: gallerySectionPosition, config: config.slow }, [
    gallerySectionPosition
  ])

  const galleryOnePY = gallerySectionPositionSpring.to([1, 2, 3], [-1, 5, 20])
  const galleryTwoPY = gallerySectionPositionSpring.to([1, 2, 3], [-10, -1, 10])
  const galleryThreePY = gallerySectionPositionSpring.to([1, 2, 3], [-20, -10, -1])

  const galleryOneScale = gallerySectionPositionSpring.to([1, 2, 3], [1, 0, 0])
  const galleryTwoScale = gallerySectionPositionSpring.to([1, 2, 3], [0, 1, 0])
  const galleryThreeScale = gallerySectionPositionSpring.to([1, 2, 3], [0, 0, 1])

  const pZ = galleryImagePositionSpring.to([1, 2, 3], [-3.5, 6.5, 20])

  const SkyDistance = galleryImagePositionSpring.to([1, 2, 3], [75, 500, 45])

  useLayoutEffect(() => {
    window.iFrameResizer = {
      readyCallback: function () {
        if (parentIFrame) {
          parentIFrame.getPageInfo(function (pageInfo) {
            // console.log('S1', pageInfo)
            setClientHeight(pageInfo.clientHeight - (stationNavBarHeight + raidoBarHeight))
          })
        }
      }
    }

    setClientHeight(window.innerHeight)
  }, [])

  return (
    <div style={{ height: clientheight + 'px' }}>
      <Canvas
        dpr={dpr}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}
        shadows
        camera={{ position: [20, 15, 50], fov: 42 }}>
        {/* <color attach="background" args={['#d0d0d0']} /> */}
        <Suspense fallback={null}>{/* <Title /> */}</Suspense>

        <Clouds />

        <Gallery
          galleryPosition={galleryImagePosition}
          position-x={1}
          position-y={galleryOnePY}
          position-z={pZ}
          scale={galleryOneScale}
          images={GalleryStore.lookImages.lookOne}
        />
        <Gallery
          galleryPosition={galleryImagePosition}
          position-x={1}
          position-y={galleryTwoPY}
          position-z={pZ}
          scale={galleryTwoScale}
          images={GalleryStore.lookImages.lookTwo}
        />
        <Gallery
          galleryPosition={galleryImagePosition}
          position-x={1}
          position-y={galleryThreePY}
          position-z={pZ}
          scale={galleryThreeScale}
          images={GalleryStore.lookImages.lookThree}
        />

        {!isMobile && <Sky distance={75} sunPosition={[50, 12, 30]} turbidity={0.1} rayleigh={0.225} azimuth={360} />}
        {/* {!isMobile && <AnimSky distance={SkyDistance} sunPosition={[50, 12, 30]} turbidity={0.1} rayleigh={0.225} azimuth={360} />} */}
        <Light />
        <Rig />
        <Stats />
        {/* <OrbitControls /> */}
      </Canvas>
      <Loader />

      <GalleryImageControls />
      <GallerySectionControls />
      <InfoPanel />
      <Intro ready={ready} setReady={setReady} start={start} setStart={setStart} />
      <DeviceInfo tier={GPUTier} />
    </div>
  )
}

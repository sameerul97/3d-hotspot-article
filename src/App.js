import * as THREE from 'three'
import React, { useState, Suspense, useEffect, useLayoutEffect, Fragment } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Loader, Sky } from '@react-three/drei'
import { useGLTF, useDetectGPU } from '@react-three/drei'
import { a as aThree } from '@react-spring/three'
import { config } from '@react-spring/web'
import { useSpring } from '@react-spring/core'
import { useRoute } from 'wouter'

import useStore from './store'
import Rig from './components/Rig'
import Light from './components/Light'
import InfoPanel from './components/InfoPanel'
import Gallery from './components/gallery/Gallery'
import GalleryImageControls from './components/controls/GalleryImageControls'
import GallerySectionControls from './components/controls/GallerySectionControls'

import Clouds from './components/cloud/Clouds'
import Title from './components/gallery/Title'
import Intro from './components/Intro'
import DeviceInfo from './components/DeviceInfo'

import GalleryStore from './data/index'
import useClientHeight from './hooks/useClientHeight'

window.GalleryStore = GalleryStore

const stationNavBarHeight = 76.09
const raidoBarHeight = 94

export default function App() {
  const GPUTier = useDetectGPU()
  const [height] = useClientHeight()
  const [, params] = useRoute('/article/:id')

  const [ready, setReady] = useState(false)
  const [start, setStart] = useState(false)
  const [dpr, setDpr] = useState([1, 1])

  const [isMobile, setIsMobile] = [useStore((state) => state.isMobile), useStore((state) => state.setIsMobile)]
  const [clientheight, setClientHeight] = [useStore((state) => state.clientheight), useStore((state) => state.setClientHeight)]

  const [setGalleryImagePosition, setGallerySectionPosition, setImageSelected] = [
    useStore((state) => state.setGalleryImagePosition),
    useStore((state) => state.setGallerySectionPosition),
    useStore((state) => state.setImageSelected)
  ]

  useEffect(() => {
    const id = params?.id

    if (id) {
      let foundLook

      try {
        Object.keys(GalleryStore.lookImages).forEach((look) => {
          const images = GalleryStore.lookImages[look]

          images.filter((image) => {
            if (id === image.id) {
              foundLook = image
              throw new Error()
            }
          })
        })
      } catch (error) {
        setGalleryImagePosition(foundLook.galleryImagePosition)
        setGallerySectionPosition(foundLook.gallerySectionPosition)
        setImageSelected()
      }
    }
  }, [])

  useEffect(() => {
    if (GPUTier.tier === '0' || GPUTier.isMobile) {
      setIsMobile(true)
      setDpr([1.5, 1.9])
    } else if (GPUTier.tier === '3') {
      setIsMobile(false)
      setDpr([2.25, 2.25])
    } else {
      setIsMobile(false)
      setDpr([1, 1.3])
    }

    setReady(true)
  }, [])

  useEffect(() => {
    setClientHeight(height)
  }, [height])

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
        <Light />
        <Rig />
        <Stats />
      </Canvas>
      <Loader containerStyles={{ zIndex: '10000000000' }} />

      <GalleryImageControls />
      <GallerySectionControls />
      <InfoPanel />
      <Intro ready={ready} setReady={setReady} start={start} setStart={setStart} />
      <DeviceInfo tier={GPUTier} />
    </div>
  )
}

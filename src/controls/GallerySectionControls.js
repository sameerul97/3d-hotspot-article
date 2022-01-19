import * as THREE from 'three'
import React, { useCallback } from 'react'
import { a as aWeb, config } from '@react-spring/web'
import { useSpring } from '@react-spring/core'

import useStore from '../Store'

export default function GallerySectionControls() {
  const imageSelected = useStore((state) => state.imageSelected)

  const setGalleryImagePosition = useStore((state) => state.setGalleryImagePosition)
  const setGallerySectionPosition = useStore((state) => state.setGallerySectionPosition)

  const [{ imageSelectedSpring }] = useSpring({ imageSelectedSpring: imageSelected, config: config.slow }, [imageSelected])

  return (
    <aWeb.div
      className="sections-controls transition"
      style={{
        opacity: imageSelectedSpring.to([false, true], [1, 0]),
        marginLeft: imageSelectedSpring.to([false, true], ['0%', '-25%']),
        marginTop: imageSelectedSpring.to([false, true], ['0', '-25%'])
      }}>
      <button
        onClick={() => {
          setGalleryImagePosition(1)
          setGallerySectionPosition(Number(1))
        }}>
        Look 1
      </button>
      <button
        onClick={() => {
          setGalleryImagePosition(1)
          setGallerySectionPosition(Number(2))
        }}>
        Look 2
      </button>
      <button
        onClick={() => {
          setGalleryImagePosition(1)
          setGallerySectionPosition(Number(3))
        }}>
        Look 3
      </button>
    </aWeb.div>
  )
}

import * as THREE from 'three'
import React, { useCallback } from 'react'
import { a as aWeb, config } from '@react-spring/web'
import { useSpring } from '@react-spring/core'

import useStore from '../Store'

export default function GalleryImageControls() {
  const imageSelected = useStore((state) => state.imageSelected)
  const hotspotSelected = useStore((state) => state.hotspotSelected)

  const galleryImagePosition = useStore((state) => state.galleryImagePosition)
  const setGalleryImagePosition = useStore((state) => state.setGalleryImagePosition)

  const gallerySectionPosition = useStore((state) => state.gallerySectionPosition)
  const setGallerySectionPosition = useStore((state) => state.setGallerySectionPosition)

  const [{ hotspotSelectedSpring }] = useSpring(
    { hotspotSelectedSpring: hotspotSelected || imageSelected ? true : false, config: config.slow },
    [hotspotSelected, imageSelected]
  )

  const onPrevClick = useCallback(() => {
    if (galleryImagePosition === 1) {
      return
    } else {
      setGalleryImagePosition(galleryImagePosition - 1)
    }
  }, [galleryImagePosition])

  const onNextClick = useCallback(() => {
    if (galleryImagePosition === 3) {
      return
    } else {
      setGalleryImagePosition(galleryImagePosition + 1)
    }
  }, [galleryImagePosition])

  return (
    <aWeb.div
      className="gallery-controls transition"
      style={{
        opacity: hotspotSelectedSpring.to([false, true], [1, 0]),
        marginRight: hotspotSelectedSpring.to([false, true], ['0%', '-25%']),
        marginBottom: hotspotSelectedSpring.to([false, true], ['0%', '-25%'])
      }}>
      <button onClick={onPrevClick}>Prev</button>
      <button onClick={onNextClick}>Next</button>
    </aWeb.div>
  )
}

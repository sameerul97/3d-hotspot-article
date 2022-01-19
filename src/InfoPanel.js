import React, { useCallback, useEffect, useRef } from 'react'
import useStore from './Store'

import { IMAGE_PATH } from './utils/Helper'

export default function InfoPanel() {
  const panelRef = useRef()

  const hotspotSelected = useStore((state) => state.hotspotSelected)
  const selectedHotspotData = useStore((state) => state.selectedHotspotData)
  const clientheight = useStore((state) => state.clientheight)

  const setHotspotSelected = useStore((state) => state.setHotspotSelected)

  const closeInfoPanel = useCallback(() => setHotspotSelected())

  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTop = 0
    }
  }, [hotspotSelected])

  return (
    <div
      ref={panelRef}
      style={{ height: hotspotSelected ? 0.9 * clientheight : 0 }}
      className={`${hotspotSelected ? 'h-90' : 'h-0'} info_panel`}>
      <div className="close_wrapper">
        <button className="close-btn-null close" onClick={closeInfoPanel}></button>
        {/* <span data-icon="text" className="close" onClick={closeInfoPanel}></span> */}
      </div>

      <div className="wrapper">
        {/* <h1 className="mt-4 py-4">The Look: Seventies Chic</h1> */}
        <h3 className="mt-5 mb-4">{selectedHotspotData.title}</h3>
        <div className="row">
          <div className="col-md-8 text-left">
            <p className="mb-4">{`${selectedHotspotData.description}`}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-left">
            <img className="img-fluid" src={`${IMAGE_PATH + selectedHotspotData.imageSrc}`} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-5 text-left">
            <div className="mt-4 mb-4 ">
              <a role="button" className="w-100 btn grazia text-black" href={`${selectedHotspotData.buttonSrc}`} target="_blank">
                <p className="mb-0 ">Shop now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useCallback } from 'react'
import useStore from '../store'

export default function DeviceInfo({ tier }) {
  const devMode = useStore((state) => state.devMode)
  const setDevMode = useStore((state) => state.setDevMode)

  const onClick = useCallback(() => setDevMode())

  const Info = () => (
    <React.Fragment>
      <span className="d-block">FPS (Frames per second): {tier.fps}</span>
      <span className="d-block">GPU: {tier.gpu}</span>
      <span className="d-block">Is Mobile: {JSON.stringify(tier.isMobile)}</span>
      <span className="d-block">Tier: {tier.tier}</span>
    </React.Fragment>
  )

  return (
    <div className="device-info">
      <button onClick={onClick}>{devMode ? 'Off' : 'On'} dev mode</button>
      {devMode && <Info />}
    </div>
  )
}

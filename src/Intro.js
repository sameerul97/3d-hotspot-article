import useStore from './Store'

export default function Intro({ ready, setReady, start, setStart }) {
  const clientheight = useStore((state) => state.clientheight)

  return (
    <div style={{ height: 0.9 * clientheight }} className={`fullscreen transition ${start && ready ? 'd-none' : 'notready'}`}>
      <button className=" grazia text-dark" onClick={() => setStart(true)}>
        {!ready ? 'loading' : 'Start'}
      </button>
    </div>
  )
}

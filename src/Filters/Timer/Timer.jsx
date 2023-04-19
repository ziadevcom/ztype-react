import './Timer.css'

export default function Timer ({ config }) {
  const { time } = config
  return (
    <div id='timer'>
      {time}
    </div>
  )
}

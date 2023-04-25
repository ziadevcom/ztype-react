import { useState, useEffect } from 'react'
import './Timer.css'

export default function Timer ({ config, testOnGoing, setTestFinished }) {
  const [seconds, setSeconds] = useState(config.time)

  useEffect(() => {
    let intervalId = null
    if (testOnGoing) {
      intervalId = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    }

    if (seconds === 0) {
      clearInterval(intervalId)
      setTestFinished(true)
    }

    return () => clearInterval(intervalId)
  }, [testOnGoing, seconds])

  return (
    <div id='timer'>
      {seconds}
    </div>
  )
}

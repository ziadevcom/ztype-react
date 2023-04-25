import Header from './Header/Header'
import Filters from './Filters/Filters'
import Typer from './Typer/Typer/'
import Results from './Results/Results'
import Footer from './Footer/Footer'
import './App.css'
import { useState } from 'react'

export default function zType () {
  const [config, setConfig] = useState({
    time: 30,
    punctuation: false,
    numbers: true
  })
  const [testOnGoing, setTestOnGoing] = useState(false)
  const [testFinished, setTestFinished] = useState(false)
  const [userText, setUserText] = useState('')
  const [WPM, setWPM] = useState(null)

  function onUserTextChange ({ target }) {
    setUserText(target.value)
  }
  function onClickStartTest () {
    // if (testOnGoing) return
    setTestOnGoing(true)
    setConfig({ ...config })
  }

  return (
    <>
      <Header />
      <main>
        <Filters config={config} setConfig={setConfig} testOnGoing={testOnGoing} testFinished={testFinished} setTestFinished={setTestFinished} />
        <Results config={config} WPM={WPM} testFinished={testFinished} />
        <Typer config={config} testOnGoing={testOnGoing} onClickStartTest={onClickStartTest} userText={userText} onUserTextChange={onUserTextChange} testFinished={testFinished} />
      </main>
      <Footer />
    </>
  )
}

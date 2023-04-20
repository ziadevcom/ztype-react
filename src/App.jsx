import Header from './Header/Header'
import Filters from './Filters/Filters'
import Typer from './Typer/Typer/'
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
  const [userText, setUserText] = useState('')

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
        <Filters config={config} setConfig={setConfig} testOnGoing={testOnGoing} />
        <Typer config={config} testOnGoing={testOnGoing} onClickStartTest={onClickStartTest} userText={userText} onUserTextChange={onUserTextChange} />
      </main>
      <Footer />
    </>
  )
}

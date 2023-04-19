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

  return (
    <>
      <Header />
      <main>
        <Filters config={config} setConfig={setConfig} />
        <Typer config={config} />
      </main>
      <Footer />
    </>
  )
}

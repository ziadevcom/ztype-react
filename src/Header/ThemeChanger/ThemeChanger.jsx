import { useRef } from 'react'
import './ThemeChanger.css'

export default function ThemeChanger () {
  const themeChangerRef = useRef(null)

  function changeTheme () {
    const accentColor = themeChangerRef.current.value
    const root = document.documentElement
    root.style.setProperty('--accent-color', accentColor)
  }

  return (
    <div className='header__themeChanger'>
      <input onChange={changeTheme} ref={themeChangerRef} className='sr-only' type='color' id='themeChanger' />
      <label className='sr-only' htmlFor='themeChanger'>Change theme</label>
    </div>
  )
}

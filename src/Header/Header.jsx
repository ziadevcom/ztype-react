import Logo from './Logo/Logo'
import GithubLink from './GithubLink/GithubLink'
import ThemeChanger from './ThemeChanger/ThemeChanger'
import './Header.css'

export default function Header () {
  return (
    <header className='header'>
      <Logo />
      <nav>
        <GithubLink />
        <ThemeChanger />
      </nav>
    </header>
  )
}

import { header, link } from './Header.css'

function Header () {
  return (
    <nav className={header}>
      <img src='/logo.png' alt='logo' />
      <a className={link} href='/'>
        Hacker News
      </a>
    </nav>
  )
}

export default Header

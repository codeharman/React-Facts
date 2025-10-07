// Navbar()

import ReactLogo from '../assets/react.svg'
export default function Navbar() {
  return (
    <>
      <header className="header">
        <img src={ReactLogo} alt='React Logo'/>
        <h1 className="header-text">React Facts</h1>
      </header>
    </>
  )
};
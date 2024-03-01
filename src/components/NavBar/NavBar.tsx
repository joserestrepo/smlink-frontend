import React from 'react'
import LogoComponent from '../Logo/Logo'
import NavLinksComponent from './components/NavLinks/NavLinks'

import './NavBar.scss'

const NavBarComponent: React.FC = () => {
  return (
    <div className="container container-navbar">
      <LogoComponent />
      <NavLinksComponent />
    </div>
  ) as React.ReactNode
}
export default NavBarComponent

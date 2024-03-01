import React from 'react'
import ButtonComponent from '../../../Button/Button'
import { TypeButton } from '../../../Button/models/button.model'

import './NavLinks.scss'

const NavLinksComponent: React.FC = () => {
  return (
    <div className="container-buttons">
      <ButtonComponent typeButton={TypeButton.OUTLINE} textButton="Home" />
      <ButtonComponent
        typeButton={TypeButton.OUTLINE}
        textButton="iniciar sesión"
      />
      <ButtonComponent textButton="Registrarme" />
    </div>
  ) as React.ReactNode
}
export default NavLinksComponent

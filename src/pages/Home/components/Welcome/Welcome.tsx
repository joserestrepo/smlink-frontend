import React, { ReactNode } from 'react'

import './Welcome.scss'
import InputComponent from '../../../../components/Input/Input'
import ButtonComponent from '../../../../components/Button/Button'
import { TypeButton } from '../../../../components/Button/models/button.model'

const WelcomeComponent: React.FC = () => {
  return (
    <div className="container-welcome">
      <h1 className="container-welcome__title">¡Bienvenido a SMLINK!</h1>
      <p className="container-welcome__description">
        SMLINK es una herramienta gratuita. Transforma tus enlaces largos en
        algo simple y memorable.
      </p>
      <div className="container-short">
        <InputComponent />
        <ButtonComponent typeButton={TypeButton.ICON} />
      </div>
    </div>
  ) as ReactNode
}

export default WelcomeComponent

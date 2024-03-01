import React, { ReactNode } from 'react'

import './input.scss'

const InputComponent: React.FC = () => {
  return (
    <input className="input" type="text" placeholder="Ingrese el enlace aquí" />
  ) as ReactNode
}

export default InputComponent

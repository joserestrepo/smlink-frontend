import React, { ReactNode } from 'react'

import { ButtonProps, TypeButton } from './models/button.model'

import './Button.scss'

const ButtonComponent: React.FC<ButtonProps> = ({
  typeButton,
  textButton = 'Button',
}) => {
  return (
    <button
      type="button"
      className={`button ${typeButton ? `button--${typeButton}` : ''}`}
    >
      {typeButton === TypeButton.ICON ? (
        <img
          className="button__icon"
          src="assets/svgs/scissors.svg"
          alt="scissors"
        />
      ) : (
        textButton
      )}
    </button>
  ) as ReactNode
}

export default ButtonComponent

export enum TypeButton {
  OUTLINE = 'outline',
  ICON = 'icon',
}

export interface ButtonProps {
  typeButton?: TypeButton
  textButton?: string
  icon?: string
}

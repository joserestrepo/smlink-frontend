import React from 'react'
import NavBarComponent from '../../components/NavBar/NavBar'
import WelcomeComponent from './components/Welcome/Welcome'

const HomeComponent: React.FC = () => {
  return (
    <div>
      <NavBarComponent />
      <WelcomeComponent />
    </div>
  ) as React.ReactNode
}

export default HomeComponent

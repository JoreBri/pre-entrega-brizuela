import React from 'react'
import { NavBar } from './NavBar'
import { CarritoWidget } from './CarritoWidget'
import logo from '../../assets/logo.jpg'; // Importa la imagen

export const Header = () => {
  return (
    <header className='header'> 
    <h1>¡PET PARADISE!</h1>
      <NavBar />
      <CarritoWidget/>
      <div className='imgDiv'>
      <img className='imgLogo' src={logo} alt="Ejemplo"/>
      </div>
    </header>
    
  )
}

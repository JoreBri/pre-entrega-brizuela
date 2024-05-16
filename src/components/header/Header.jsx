import React from 'react'
import { NavBar } from './NavBar'
import { CarritoWidget } from './CarritoWidget'
import logo from '../../assets/logo.jpg'; // Importa la imagen

export const Header = () => {
  return (
    <header className='header'> 
    <div className='imgDiv'>
    <a href="#"><img className='imgLogo' src={logo} alt="Ejemplo" /></a>
    <a className='logoLink' href="#"><h1>¡PET PARADISE!</h1></a>
      </div>
      <NavBar />
      <CarritoWidget/>
      
    </header>
    
  )
}

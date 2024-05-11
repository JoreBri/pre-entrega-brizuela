import React from 'react'
import { NavBar } from './NavBar'
import { CarritoWidget } from './CarritoWidget'

export const Header = () => {
  return (
    <header className='header'> 
    <h1>¡PET PARADISE!</h1>
      <NavBar />
      <CarritoWidget/>
    </header>
  )
}

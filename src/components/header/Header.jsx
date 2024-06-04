import React from 'react';
import { NavBar } from './NavBar';
import { CarritoWidget } from './CarritoWidget';
import logo from '../../assets/logo.jpg'; // Importa la imagen
import { Routes, Route, Link } from "react-router-dom";


export const Header = () => {
  return (
    <header className='header'>
      <div className='imgDiv'>
        <Link to="/">
          <img className='imgLogo' src={logo} alt="Ejemplo" />
        </Link>
        <Link className='logoLink' to="/"><h1>¡PET PARADISE!</h1></Link>
      </div>
      <NavBar />
      <CarritoWidget/>
    </header>
  );
}


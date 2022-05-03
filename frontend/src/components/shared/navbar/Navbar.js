import React from "react";
import './navbar.css';

// Images
import logobero from '../../../images/logobero.png';

import {
    Link
} from "react-router-dom";

export const Navbar = ({ url }) => {
  return (
    <>
      <header className="header">
          <div className="grid">
                <div className="img-logo">
                  <img src={logobero} alt="esta imagen es el logo de huevosBero"className="logo" />
                </div>
              
                  <div className="nuevo-contenerdor-nav">
                      <Link to={`${url}`} className="nuevo-nav-enlace"> Home </Link>
                      <Link to={`${url}login`} className="nuevo-nav-enlace">Login</Link>
                      <Link to={`${url}registro`} className="nuevo-nav-enlace">Registro</Link>
                      <Link to={`${url}productos`} className="nuevo-nav-enlace">Producto</Link>
                      <Link to={`${url}compras`} className="nuevo-nav-enlace">Compras</Link>
                      <Link to={`${url}domicilio`} className="nuevo-nav-enlace">Domicilio</Link>
                      <Link to={`${url}pagos`} className="nuevo-nav-enlace">Pagos</Link>

                      {/* <Link to="" className="nav-enlace">Registro producto</Link> */}
                  </div>
              
          </div>
      </header>  
    </>
  );
};

import React, { Fragment } from 'react';
import imagenubicacion from '../../../images/icongps.webp';
import iconocircle from '../../../images/iconocirculo.png';
import './Domicilios.css';

export const Domicilio = () => {
    return (
    <Fragment>

<div className="container">
                <h1 className="Titulo-domicilio">¿Cómo quieres recibir tu compra?</h1>
                 <p className="p-domicilio">Domicilio</p>
                 <div className="info-Domicilio">
                 <img src={imagenubicacion} alt="imagen de la ubicacion del gps" className="img-gps" />
                     <p className="numero-dire">Carrera 11 a#14-12</p>
                     <p className="direccion1">jorge eliecer gaitan-candelaria valle</p>
                     <p className="direcion">Editar o elegir otro</p>
                 </div>
                 <p className="detalle-compra">Recibir compra</p>

                 <div className="detalle-delpedido">
                 <img src={iconocircle} alt="imagen de circulo" className="img-circulo" />
                     <p className="dettalles-pedido">Llega el martes y el viernes 4 marzo a tu direccion </p>
                     <p className="gratis">Gratis</p>
                 </div>
                 <p className="beneficiomercadopuntos">beneficio mercado puntos</p>
                 <button className="continuar" type="submit">
                     Continuar
                 </button>
        
            </div>

    </Fragment>
        

        
        
    

    )
}

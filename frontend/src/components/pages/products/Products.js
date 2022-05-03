import React from 'react';
import HuevosTipoA from '../../../images/tipoa.jpg';
import HuevosTipoAA from '../../../images/tipoaa.jpg';
import HuevosTripleA from '../../../images/huevostriplea.jpg';
import huevosYumbo from '../../../images/yumbo.jpg';
import huevoscodornices from '../../../images/panaldecoordinz.jpg';

 import './Products.css';

export const Products = () => {
    return (
        <>
            <section className="container-producto">
                    <section className="item-producto">
                        <div className="item">
                            <img  className="imagenes"src={HuevosTipoA} alt="imagen huevos tipo A" />
                            <p>Huevos Tipo: A</p>
                            <p>Precio: 11000</p>
                            <p>Codigo: 010022</p>
                            <button className="realizar-pedido">Comprar</button>
        

                        </div>
                        
                        <div className="item">
                            <img  className="imagenes" src={HuevosTipoAA} alt="imagen huevos tipo AA" />
                            <p>Huevos Tipo: AA</p>
                            <p>Precio: $13000</p>
                            <p>Codigo: 020024</p>
                            <button className="realizar-pedido">Comprar</button>
                        </div>
        
                        <div className="item">
                            <img className="imagenes"src={HuevosTripleA}lt="imagen Huevos triple a" />
                            <p>Huevos Tipo: AAA</p>
                            <p>Precio: $15000</p>
                            <p>Codigo: 036022</p>
                            <button className="realizar-pedido">Comprar</button>
                        </div>
                    
                        <div className="item">
                            <img className="imagenes"src={huevosYumbo} alt="huevos tipo yumbo" />
                            <p>Huevos Tipo: Yumbo</p>
                            <p>Precio: $18000</p>
                            <p>Codigo: 040023</p>
                            <button className="realizar-pedido">Comprar</button>
                        </div>
        
                        <div className="item">
                            <img className="imagenes"src={huevoscodornices} alt="huevos tipo yumbo" />
                            <p>Huevos de codornices</p>
                            <p>Precio: $7000</p>
                            <p>Codigo: 0403452</p>
                            <button className="realizar-pedido">Comprar</button>
                        </div>
                        <div className="item">
                            <img className="imagenes"src={huevosYumbo} alt="huevos tipo yumbo" />
                            <p>Huevos Tipo: Yumbo</p>
                            <p>Precio: $18000</p>
                            <p>Codigo: 040023</p>
                            <button className="realizar-pedido">Comprar</button>
                        </div>


        
                    </section>
                
        
                </section>
        </>
    )
}


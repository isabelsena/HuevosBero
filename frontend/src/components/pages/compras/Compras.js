import React from 'react';

import './Compras.css';
import HuevosTipoA from '../../../images/tipoa.jpg';
import HuevosTipoAA from '../../../images/tipoaa.jpg';
import HuevosTripleA from '../../../images/huevostriplea.jpg';
import iconoEliminar from '../../../images/iconeliminar.webp';
export const Compra = () => {
    return (
            
                <div className="contenedor-principal">
                    <h1 className="title">Realizar Compra</h1>
                    <form className="datos-compra">
                         <p className="dato-cliente">
                       <label className="u-suario">Cliente:</label>  
                       <input className="usuario"  type="text" name="fullname" id="fullname" placeholder="Ingresa Nombre Del Cliente"/>
                       
                         </p>
                    
                    <p className="dato-cliente">
                        <label className="c-orreo">Correo:</label>  
                        <input className="correo" type="text" name="correo" id="correo" placeholder="Ingresa El Correo Del Cliente"/>
                        
                    </p>
               </form>
           <tr className="table1">
                <td className="fila0">Imagen</td>
               <td className="fila-nombre">Nombre</td>
               <td className="fila-precio">Precio</td>
               <td className="fila-cantidad">Cantidad</td>
           </tr>
           <tr className="table1">
           <img src={HuevosTipoA } alt="imagen de abono"className="imagen1"/>
               <td className="fila1">Huevo  Tipo A</td>
               <td className="fila2">$ 14500</td>
               <td className="fila3">5</td>
           </tr>
                       
           <tr className="table1">
           <img src={HuevosTipoAA } alt="imagen de abono"className="imagen1"/>
               <td className="fila4">Huevos Doble A</td>
               <td className="fila5">$ 16000</td>
               <td className="fila6">10</td>
           </tr>
                       
           <tr className="table1">
           <img src={HuevosTripleA } alt="imagen de abono"className="imagen1"/>
               <td className="fila7">Huevos Triple A</td>
               <td className="fila8">$ 18.000</td>
               <td className="fila9">3</td>
           </tr>
           <tr className="table2">
               <td className="fila10">Sub total</td>
               <td className="fila11">Eliminar</td>
           </tr>

           <tr className="table2">
               <td className="fila12">4000</td>
               <img src={iconoEliminar } alt="imagen de icono eliminar"className="imagen2"/>
            </tr>  
            <tr className="table2">
               <td className="fila13">5000</td>
               <img src={iconoEliminar } alt="imagen de icono eliminar"className="imagen3"/>
            </tr> 

            <tr className="table2">
               <td className="fila14">6000</td>
               <img src={iconoEliminar } alt="imagen de icono eliminar"className="imagen4"/>  
            </tr>  

            <tr className="table3">
               <td className="fila15">SubTotal: </td>
               <td className="fila16"> $/60.000</td>
               <td className="fila17">Iva:</td>
               <td className="fila18">$19</td>
               <td className="fila19">Total:</td>
               <td className="fila20">$/60.500</td>

            </tr>  
                   
 
            </div>
       
    

    )
}

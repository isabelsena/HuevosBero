import React from 'react';

import './Login.css';

export const Login = () => {
    return (
    
           <div className="container-formulario">
             <div className="contenedor">
                <h2 className="Titulo">Inicia sesión</h2>
               <form className="formulario">
                   <p>
                       <label className="usu-label">Usuario:</label>  
                       <input class="login-usuario"type="text" name="fullname" id="fullname"/>
                       
                    </p>
                    
                    <p>
                        <label className="usu-label">Contraseña:</label>  
                        <input className="login-usuario"type="password" name="password" id="contraseña"/>
                        
                    </p>
               
   
                   <p className="Blocks">
                       <button className="ingresar" type="submit">
                       Ingresar
                       </button> 
                    </p>    
               
             
               </form>
              </div> 
        </div>
    

    )
}

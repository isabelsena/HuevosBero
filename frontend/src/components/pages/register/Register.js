import React from 'react';

 import './Register.css';

export const Register = () => {
    return (
        <>
        <div className="container">
       
            <div className="container-wrapper">
      
                <div className="container-form">
                    <h2>Registrate</h2>
                    <form action="">
                        <p>
                          <label>Nombre:</label>  
                          <input type="text" name="fullname" id="fullname" />
                        </p>
                        <p>
                            <label>Apellido:</label>  
                            <input type="text" name="fullname" id="fullname" />
                          </p>
                        <p>
                          <label>Tel:</label>  
                          <input type="tel" name="phone" id="phone" />
                        </p>

                        <p>
                            <label>correo:</label>  
                            <input type="email" name="correo" id="email" />
                         </p>

                         <p className="container-block">
                             <label>Mensaje</label>
                             <textarea name="mensaje" rows="3"></textarea>
                         </p>

                         <p className="container-block">
                            <button className="enviar" type="submit">
                                Enviar
                            </button>
                         </p> 

                    </form>
                </div>

                <div className="container-info">
                    <h4>Mas información</h4>
                    <ul>
                        <li><i className="fal fa-map-marker-alt"></i>Baker stret</li>
                        <li><i className="far fa-phone-square-alt"></i>111 111 111 111</li>
                        <li><i className="far fa-envelope"></i>HuevosBero@website.com</li>
                     </ul>

                     <p>
                       Dirección; el lauro via candelaria 
                       El huevo,tan facil de adquirir y exquisito al consumir!
                     </p>
                     <p>Company.com</p>
                    
                </div>
            </div>
        </div>
        </>
    )
}


import React from 'react';

import RecetasHuevogallina from '../../../images/recetashuevogallina.jpg';
import imagenrecetacodornis from '../../../images/recetashuevoscoorniz.jpg';
import BeneficioConsumirHuevoGallina from '../../../images/Beneficiohuevogallina.jpg';
import BeneficioConsumirHuevoCornices from '../../../images/BeneficioCornices.jpeg';
import imagenGallina from '../../../images/imagendegallinas.webp';
import imagenAviabono from '../../.././images/codorniz.jpg';
import './Home.css';


import {
    Link
} from "react-router-dom";

export const Home = () => {
    return (
        <>
        <div className="servicios">
            <div className="grid">
                
                { <p className="parrafo_servicios">Porque sabemos que cada persona es única y especial, tenemos una variedad que se ajusta a las necesidades de todos. Queremos acompañarte en cada momento de tu vida, ¡Elige tu línea favorita! y disfruta sus múltiples beneficios. </p> }
                <div className="items1">
                    <div className="itemes">
                        <img src={RecetasHuevogallina} alt="recetas con huevos de gallina" className="img" />
                        <p className="recetas-gallinas">Recetas Para preparar con  huevos de gallina</p>
                    </div>
                   
            
                         <div className="itemes">
                            <img src={imagenrecetacodornis} alt="recetas huevos de codornis" className="img" />
                            <p className="recetas-cornices">Recetas para preparar con  huevos de codornices</p>
                        </div>
                        
                        <div className="itemes">
                            <img src={BeneficioConsumirHuevoGallina} alt="Beneficios consumir huevo gallina" className="img" />
                            <p className="beneficios-gallinas">Beneficios de consumir huevos de gallina</p>
                            
                         </div> 
                    
                    <div className="itemes">
                        <img src={BeneficioConsumirHuevoCornices} alt="beneficios consumir huevos de codornices" className="img" />
                        <p className="beneficio-cornices">Beneficio de consumir huevos de codornices</p>
                    </div>

                    
                </div>   
               

             </div>   
             </div>  

             <aside className="aside">
                 
         <div className="grid">
            <h2 className="titulo2">Nuestros productos</h2>
            <img src={imagenGallina} alt="imagen de gallinas"className="img-gallina" />
            <p className="primer-parrafo">Conoce todas nuestras lineas de productos especializadas para cada necesidad,productos naturales con alto contenido nutricional en vitaminas ,minerales,aminoacidos y antioxidantes.</p>
        
            
            <div className="aviabono">
                <h3>Huevos de codornices enriquecidos con Omega 3, ¿una realidad?  </h3>
                <p className="parrafo2">Como es de conocimiento, este tipo de ácidos grasos fortalece las neuronas y ayudan a mantener el corazón sano y protegido contra un accidente cardiovascular; además se les atribuyen beneficios contra enfermedades como el cáncer, la depresión, la inflamación y el trastorno de hiperactividad con déficit de atención, THDA, entre otros beneficios. El problema es que el cuerpo no produce omega 3, y son muy pocos los alimentos enriquecidos con éste, por lo que se debe obtener a través de la alimentación, en especial mediante el consumo de pescado o de este tipo de alimentos enriquecidos.</p>
                <img src={imagenAviabono} alt="imagen de abono"className="img-abono" />
            </div>
            
        </div>
    </aside>


    <footer>
        <div className="grid">
            <div className="textos-footer">
                <h4 className="subtitulo">HUEVOS BERO</h4>
                <p>Palmira Tel: 4851919</p>
                <p>Cali Tel: 3153326422</p>
                <p>Candelaria Tel: 2649847</p>
                <p>Gorgona Tel: 3186214256</p>
            </div>

            <div className="footer-item1">
                <Link href="#">
                    <i className="fab fa-facebook-f"></i>

                </Link>
            </div>
            <div className="footer-item2">
                <Link href="#">
                    <i className="fab fa-twitter"></i>

                </Link>
            </div>
            <div className="footer-item3">
                <Link href="#">
                    <i className="fab fa-instagram-square"></i>

                </Link>
            </div>
           
            <div className="footer-item4">
                <Link href="#">
                    <i className="fab fa-whatsapp"></i>

                </Link>
            </div>

            </div>

    </footer>

     

    </>
    )
}


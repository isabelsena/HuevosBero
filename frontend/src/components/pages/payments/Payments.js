import React from "react";
import imagendeTarjetas from '../../../images/logotarjetas.jpg';
import logotarjetas from '../../../images/icono-tarjetas.png';

import './Payments.css'

export const Payments = () => {
  return (
    <>
      <section class="contenedor-pagos">
        <section class="contenedor">
          <h1>Elije La Mejor Forma Para Realizar Tu Pago</h1>
          <p class="pafo1">Pago seguro por Tarjetas debitó o crédito </p>
          <img class="logo-tarjeta" src={imagendeTarjetas} alt="imagen de tarjetas" />
          <img class="iconos-tarjetas" src={logotarjetas} alt="imagen logo tarjetas" />

          <form class="formulario">
            <p>
              <label className="form1">Titular de la tarjeta:</label>
              <input  className="input-form" type="text" name="fullname" id="fullname" />
            </p>
            <p>
              <label className="form1">Numero de la tarjeta:</label>
              <input className="input-form" type="text" name="fullname" id="fullname" />
            </p>
            <p>
              <label className="form1" >Fecha de vencimiento:</label>
              <input className="input-form"type="date" name="date" id="date" />
            </p>

            <p>
              <label className="form1">Codigo de seguridad:</label>
              <input className="input-form"type="text" name="text" id="text" />
            </p>
            <p>
              <label className="form1">Pagar al finalizar:</label>
              <input className="input-form" type="text" name="text" id="text" />
            </p>

            <p>
              <button class="bot-enviar" type="submit">
                Enviar
              </button>
            </p>
          </form>
        </section>
      </section>
    </>
  );
};

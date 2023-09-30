import React from 'react';
import '../estilos/card.css';

function Card({ juegos }) {
  return (
    <div class="container">
      <div class="card-columns">
        <div class="card text-white border-0">
          <div class="card-img-overlay --card-img-overlay-purple d-flex flex-column justify-content-between align-items-start p-5">
            <div class="h2 mb-2"><h2>{juegos.nombre}</h2></div>
            <span class="badge badge-warning2 text-uppercase">{juegos.genero}</span>
            <button >

              <img width={'60px'} src='/static/local/iconos/mas.jfif' />

            </button >
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;


import React from 'react';
import Card from './Tarjeta';

function SearchList({ filtrarjuegos }) {
  const filtro = filtrarjuegos.map(juegos =>  <Card key={juegos.id} juegos={juegos} />); 
  return (
    <div>
      {filtro}
    </div>
  );
}

export default SearchList;
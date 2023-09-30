import React, { useState } from 'react';
import SearchList from './ListaBusqueda';
import '../estilos/search.css';

function Search(props) {
    const { datosjuegos} = props;
  const [buscarcampo, setbuscarcampo] = useState("");
  const [mostrarbusqueda, setmostrarbusqueda] = useState(false); 

  const filtrarjuegos = datosjuegos.filter(
    juegos => {
      return (
        juegos.nombre.toLowerCase().includes(buscarcampo.toLowerCase()) ||
        juegos.genero.toLowerCase().includes(buscarcampo.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setbuscarcampo(e.target.value);
    if(e.target.value===""){
      setmostrarbusqueda(false);
    }
    else {
      setmostrarbusqueda(true);
    }
  };

  function searchList() {
    if (mostrarbusqueda) {
      return (
          <SearchList filtrarjuegos={filtrarjuegos} />
      );
    }
  }

  return (
    <section className="body">
      <div >
        <h2 className="h2">Buscar</h2>
      </div>
      <div>
        <input 
          className="search"
          type = "search" 
          placeholder = "Buscar juego" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
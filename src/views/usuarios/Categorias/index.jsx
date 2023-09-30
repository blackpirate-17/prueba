import React from 'react';
import Page from '../../../Componentes/Page';
import Buscador from '../../../Componentes/Buscador';

export default function UsuariosCategoriasViews() {
    const datosjuegos = 
        [{ nombre: 'juego1', genero: 'shoter' },
        { nombre: 'juego2', genero: 'rpg' },
        { nombre: 'juego3', genero: 'estrategia' },
        { nombre: 'juego4', genero: 'estrategia' }];


    return (
        <Page>
        <React.Fragment>
                <Buscador datosjuegos={datosjuegos}/>
        </React.Fragment>
        </Page>
    );
};
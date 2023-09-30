import React from 'react';
import Page from '../../Componentes/Page';
import '../../estilos/404.css';

const NotFoundView = () => {

    return (
        <Page >
            <div>
                <img  className='notfound' alt="Under development" src="/static/local/iconos/imagenes/18273696.jpg" />
            </div>
        </Page>

    );
};

export default NotFoundView;

import React from 'react';
import { Navigate } from 'react-router-dom';
import LayoutVisitantes from './layout/Visitantes/index';
import LayoutUsuarios from './layout/Usuarios/index';
import UsuariosMainViews from './views/usuarios/Main/index';
import UsuariosCategoriasViews from './views/usuarios/Categorias/index';
import VisitanteMainViews from './views/visitantes/Main/index';
import NotFoundView from './views/NotFound/index';

const routes = [
    { path: '/', element: <Navigate to="/visitantes" /> },
    
    //---------------------------------------------------------------------------
    //---------------------------VISITANTES--------------------------------------
    //---------------------------------------------------------------------------
    
    {
        path: 'visitantes', element: <LayoutVisitantes/>,
        children: [{ path: '', element: <Navigate to="/visitantes/main" /> },
        { path: 'main', element: <VisitanteMainViews/> },
        { path: '404', element: <NotFoundView /> },
        ]
    },

    //---------------------------------------------------------------------------
    //---------------------------USUARIOS--------------------------------------
    //---------------------------------------------------------------------------
    
    {
        path: 'usuarios', element: <LayoutUsuarios/>,
        children: [{ path: '', element: <Navigate to="/usuarios/main" /> },
        { path: 'main', element: <UsuariosMainViews/> },
        { path: 'categorias', element: <UsuariosCategoriasViews/> },
        { path: '404', element: <NotFoundView /> },
        ]
    },


]

export default routes;
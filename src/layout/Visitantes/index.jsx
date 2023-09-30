import React, { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import NotFoundView from '../../views/NotFound/index';

const LayoutVisitantes = props => {
    const { pathname } = useLocation();


    //--------------------------------------------Pagina 404----------------------------------
    const [pagina404, setPagina404] = useState(true);


    //--------------------------------------------Dialogo Visitante-----------------------------------
    const [dialogVisitante, setDialogVisitante] = useState({
        open: false
    });

    //--------------------------------------------Dialogo Autenticarse----------------------------------
    const [dialogAutenticarse, setDialogAutenticarse] = useState({
        open: false
    });


   
   
    //--------------------------------------------Top Bar Menu------------------------------------------
    const [anchorMenuTopBar, setAnchorMenuTopBar] = useState({
        usuario: null
    });
    //--------------------------------------------Abrir Menu Usuario------------------------------------
    const handleClickMenuUsuario = event => {
        setAnchorMenuTopBar({ ...anchorMenuTopBar, usuario: event.currentTarget });
    };

    //--------------------------------------------Cerrar Menu Usuario-----------------------------------
    const handleCloseMenuUsuario = event => {
        setAnchorMenuTopBar({ ...anchorMenuTopBar, usuario: null });
    };

    
    
    //--------------------------------------------Tiene Que Registrarse------------------------------------
    const handleClickVisitante = event => {
        setDialogVisitante({ ...dialogVisitante, open: true });
        setAnchorMenuTopBar({ ...anchorMenuTopBar, usuario: null });
    };

    //--------------------------------------------Opcion Autenticarse-----------------------------------
    const handleClickOpcionAutenticarse = event => {
        setDialogAutenticarse({ ...dialogAutenticarse, open: true });
        setAnchorMenuTopBar({ ...anchorMenuTopBar, usuario: null });
    };

    
    
    //--------------------------------------------Cerrar Dialog Visitante------------------------------
    const handleClickCloseVisitante = event => {
        setDialogVisitante({ ...dialogVisitante, open: false });
    };

    //--------------------------------------------Cerrar Dialog Autenticarse----------------------------
    const handleClickCloseAutenticarse = event => {
        setDialogAutenticarse({ ...dialogAutenticarse, open: false });
    };


    useEffect(() => {
    }, [pathname]);

    return (
        <div>
            <Navbar
                anchorMenuTopBar={anchorMenuTopBar} dialogVisitante={dialogVisitante}
                dialogAutenticarse={dialogAutenticarse} handleClickVisitante={handleClickVisitante}
                handleClickCloseVisitante={handleClickCloseVisitante} handleClickMenuUsuario={handleClickMenuUsuario}
                handleCloseMenuUsuario={handleCloseMenuUsuario} handleClickOpcionAutenticarse={handleClickOpcionAutenticarse}
                handleClickCloseAutenticarse={handleClickCloseAutenticarse} />

            {pagina404 ? <Outlet /> : <NotFoundView />}
        </div>
    );
};

export default LayoutVisitantes;

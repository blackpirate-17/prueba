import React, { useState, useEffect } from 'react';
import { useLocation, Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import NotFoundView from '../../views/NotFound/index';

const LayoutUsuarios = props => {
    const { pathname } = useLocation();

    //--------------------------------------------Pagina 404----------------------------------
    const [pagina404, setPagina404] = useState(true);
    
    useEffect(() => {
    }, [pathname]);

    return (
        <div>
            <React.Fragment>
                <Navbar />
                {pagina404 ? <Outlet /> : <NotFoundView />}
            </React.Fragment>
    </div>
    );
};

export default LayoutUsuarios;

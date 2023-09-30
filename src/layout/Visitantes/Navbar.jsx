import React, {useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate ,Link, useLocation } from 'react-router-dom';
import Autenticarse from '../../views/Dialogos/Autenticarse';
import '../../estilos/navbar.css';
import Visitante from '../../views/Dialogos/Visitante';

const NavBar = ({ anchorMenuTopBar,dialogVisitante,dialogAutenticarse,
    handleClickMenuUsuario, handleCloseMenuUsuario, handleClickOpcionAutenticarse,
    handleClickCloseAutenticarse, handleClickVisitante, handleClickCloseVisitante, ...rest }) => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    //---------------------------Referencias del Navbar-------------------------
    const refNavbar = useRef();
    const refMenu = useRef();
    const refBoton = useRef();
    const refIcono = useRef();




    useEffect(() => {
    }, [pathname]);

    return (
        <React.Fragment>
            <div className='navcontainer'>
                <nav ref={refNavbar} className='navbar'>
                    <ul ref={refMenu} >
                        <li ref={refIcono}>
                            <Link to={'/visitantes'}>
                                <img width={'60px'} src='/static/local/iconos/wallpaper_engine_icon_249723.png'/>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/visitantes'}>
                                <span className='nav-nombre'>Gamor</span>
                            </Link>
                        </li>
                        <li><button ref={refBoton} onClick={handleClickVisitante}>Tema</button></li>
                        <li><button ref={refBoton} onClick={handleClickOpcionAutenticarse}>Autenticarse</button></li>
                        <li><button ref={refBoton} onClick={e => {e.preventDefault();
                                                                  navigate('/visitantes/404');}}>
                                                                    Registrarse
                            </button></li>
                        <li><button ref={refBoton} onClick={handleClickVisitante}>Categorias</button></li>
                    </ul>

                </nav>
            </div>
            <Autenticarse dialogAutenticarse={dialogAutenticarse} handleClickCloseAutenticarse={handleClickCloseAutenticarse} />
            <Visitante dialogVisitante={dialogVisitante} handleClickCloseVisitante={handleClickCloseVisitante} />

        </React.Fragment>
    );
};

NavBar.propTypes = {
    className: PropTypes.string
};

export default NavBar;
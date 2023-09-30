import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import '../../estilos/navbar.css';
import Estilo from '../../Componentes/Estilo';

const NavBar = ({ ...rest }) => {

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
                            <Link to={'/usuarios'}>
                                <img width={'60px'} src='/static/local/iconos/wallpaper_engine_icon_249723.png' />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/usuarios'}>
                                <span className='nav-nombre'>Gamor</span>
                            </Link>
                        </li>
                        <li><button ref={refBoton} onClick={Estilo}>Tema</button></li>
                        <li><button ref={refBoton} onClick={e => {
                            e.preventDefault();
                            navigate('/usuarios/categorias');
                        }}>
                            Categorias
                        </button></li>
                    </ul>

                </nav>
            </div>
        </React.Fragment>
    );
};

NavBar.propTypes = {
    className: PropTypes.string
};

export default NavBar;
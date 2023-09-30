import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactModal from '../../../../node_modules/react-modal/lib/index';
import Login from './Login';
import '../../../estilos/dialogo.css';
import imagen from './images.png';


export default function Autenticarse(props) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { dialogAutenticarse, handleClickCloseAutenticarse } = props;

    const [datosusuario, setDatosusuario] = useState(
        [{ usuario: 'prueba', contraseña: 'Prueba' }],
        [{ usuario: 'gamor', contraseña: 'Gamor' }],
        [{ usuario: 'administrador', contraseña: 'Administrador' }],
    );


    //-------------------------------------------Formularios--------------------------------------------
    const [datosForm, setDatosForm] = useState({
        input_usuario_aut: '',
        input_contraseña_aut: '',
    });

    //-------------------------------------------Validaciones-------------------------------------------

    const [validaciones, setValidaciones] = useState({
        input_usuario_aut: false,
        input_contraseña_aut: false,
    });

    const [mensajes, setMensajes] = useState({
        input_usuario_aut: '',
        input_contraseña_aut: '',
    });

    //--------------------------------------------Funcion Limpiar Todo----------------------------------
    const limpiarTodo = () => {
        setDatosForm({
            ...datosForm,
            input_usuario_aut: '',
            input_contraseña_aut: '',
        });
        setValidaciones({
            ...validaciones,
            input_usuario_aut: false,
            input_contraseña_aut: false,
        });
        setMensajes({
            ...mensajes,
            input_usuario_aut: '',
            input_contraseña_aut: '',
        });
    }
    //--------------------------------------------Boton Aceptar Vista Login-----------------------------
    const handleSubmitLogin = e => {
        e.preventDefault();
        if (!validacionSubmitLogin()) {
            limpiarTodo();
            navigate(pathname.replace('visitantes', 'usuarios'));
        }
    };

    const handleChangeInput = e => {
        setDatosForm({ ...datosForm, [e.target.id]: e.target.value });
        setValidaciones({ ...validaciones, [e.target.id]: false });
        setMensajes({ ...mensajes, [e.target.id]: '' });
    };

    const validacionSubmitLogin = () => {
        let resultado = false;
        let val_usuario = validaciones.input_usuario_aut;
        let val_pass = validaciones.input_contraseña_aut;
        let men_usuario = mensajes.input_usuario_aut;
        let men_pass = mensajes.input_contraseña_aut;
        let aux = 0;
        datosusuario.filter(function (datosusuario) {
            if (datosusuario.usuario === datosForm.input_usuario_aut &&
                datosusuario.contraseña === datosForm.input_contraseña_aut) {
                aux = 1

            }
            else if (datosusuario.usuario !== datosForm.input_usuario_aut &&
                datosusuario.contraseña === datosForm.input_contraseña_aut) {
                aux = 2

            }
            else if (datosusuario.usuario === datosForm.input_usuario_aut &&
                datosusuario.contraseña !== datosForm.input_contraseña_aut) {
                aux = 3
                
            }

        })
        if (aux === 0) {
            val_usuario = true;
            men_usuario = 'Verifique los datos, no existe este usuario';
            val_pass = true;
            men_pass = 'Verifique los datos, no existe esta contraseña';
            resultado = true;
        } else if (aux === 2) {
            val_usuario = true;
            men_usuario = 'Verifique los datos, no existe este usuario';
            resultado = true;
        } else if (aux === 3) {
            val_pass = true;
            men_pass = 'Verifique los datos, no existe esta contraseña';
            resultado = true;
        }


        setValidaciones({
            ...validaciones,
            input_usuario_aut: val_usuario,
            input_contraseña_aut: val_pass
        });
        setMensajes({
            ...mensajes,
            input_usuario_aut: men_usuario,
            input_contraseña_aut: men_pass
        });
        return resultado;
    };

    return (
        <React.Fragment>
            <ReactModal isOpen={dialogAutenticarse.open} ariaHideApp={false} onRequestClose={handleClickCloseAutenticarse} closeTimeoutMS={1000}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'

                    },
                    content: {
                        backgroundImage: `url(${imagen})`,
                        position: 'absolute',
                        width: '50vh',
                        height: "70vh",
                        margin: "auto",
                        border: '9px double #1C6EA4',
                        borderRadius: '40px 40px 40px 40px',
                        background: '#92dda2',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        outline: 'none',
                        padding: '20px',
                    }
                }}
                contentLabel={'Auntenticarse'} portalClassName={'autenticarse'} >
                <Login
                    datosForm={datosForm} validaciones={validaciones} mensajes={mensajes}
                    handleChangeInput={handleChangeInput} handleSubmitLogin={handleSubmitLogin}
                />
            </ReactModal>
        </React.Fragment>
    );

};
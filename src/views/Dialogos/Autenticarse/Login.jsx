import React from 'react';
import '../../../estilos/login.css'

export default function Login(props) {
    const { datosForm, validaciones, mensajes, handleChangeInput, handleSubmitLogin } = props;
    

    return (
        <form className="form" autoComplete="off" onSubmit={handleSubmitLogin}>
            <div id="form">
                <img width={'250px'} src='/static/local/iconos/images.png' />

                <input type="text" id="input_usuario_aut"
                    label="Usuario"
                    value={datosForm.input_usuario_aut}
                    onChange={handleChangeInput}
                    placeholder={"Usuario"}
                    aria-errormessage="user"
                    aria-invalid={validaciones.input_usuario_aut}
                    required />
                <p
                    id="user"
                    aria-live="assertive"
                    style={{ visibility: validaciones.input_usuario_aut ? "visible" : "hidden" }}
                >
                    {mensajes.input_usuario_aut}
                </p>


                <input type="password" id="input_contraseña_aut"
                    label="Contraseña"
                    value={datosForm.input_contraseña_aut}
                    onChange={handleChangeInput}
                    placeholder={"Contraseña"}
                    aria-errormessage="password"
                    aria-invalid={validaciones.input_contraseña_aut}
                    required />
                <p
                    id="password"
                    aria-live="assertive"
                    style={{ visibility: validaciones.input_contraseña_aut ? "visible" : "hidden" }}
                >
                    {mensajes.input_contraseña_aut}
                </p>


                <button type="submit"  > Aceptar </button>
            </div>

        </form>
    );
}
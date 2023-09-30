import React from 'react';
import ReactModal from '../../../../node_modules/react-modal/lib/index';
import '../../../estilos/dialogo.css';
import '../../../estilos/logeese.css'
import imagen from './images.png';


export default function Visitante(props) {
    const { dialogVisitante, handleClickCloseVisitante } = props;

    return (
        <React.Fragment>
            <ReactModal isOpen={dialogVisitante.open} ariaHideApp={false} onRequestClose={handleClickCloseVisitante} closeTimeoutMS={2000}
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
                        height: "6vh",
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
                contentLabel={'Visitante'} portalClassName={'visitante'} >
                <span className='span'>
                   Suscribase para acceder
                    </span>

            </ReactModal>
        </React.Fragment>
    );

};
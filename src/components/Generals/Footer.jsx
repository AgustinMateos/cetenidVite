import React from 'react'
import cetenidLogo from '../../assets/img/cetenidLogo.png'
const Footer = () => {
    return (
        <footer >
            <div className='footerContainer'><div className="footer p-10  text-base-content "><div>
                <h5>DIRECCIÓN</h5>
                <p className='footerContainerp'> Chacabuco 157. Haedo. Provincia de Buenos Aires. C.P. 1706</p>
                <h5>EMAIL</h5>
                <p className='footerContainerp'>info@cetenid.com</p>
                <h5>TELÉFONO</h5>
                <p className='footerContainerp'>+54 9 15 2617-5981</p>
                <h5>HORARIOS</h5>
                <p className='footerContainerp'>Lunes a Viernes de 8:30 a 15:30 hs.</p>
            </div>

                <nav className='footerContainerMenu'>
                    <a className="link link-hover">Cetenid</a>
                    <a className="link link-hover">Como Trabajamos</a>
                    <a className="link link-hover">Nosotros</a>
                    <a className="link link-hover">Galeria</a>
                    <a className="link link-hover">Contacto</a>
                </nav>
                <div className='footerContainerCobertura'>
                    <h4>COBERTURA</h4>
                    <p><strong className='cetenidStrong'>CETENID</strong> trabaja con Prepagas, Obras Sociales y con Incluir
                        Salud (Ex PROFE)
                    </p>
                </div></div></div>




        </footer>
    )
}

export default Footer
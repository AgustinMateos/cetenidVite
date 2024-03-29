import React from 'react'
import CetenidEquipo from "../../assets/interfaz/CetenidEquipo.jpeg"
import socias from "../../assets/interfaz/socias.jpeg"
import coordinadora from '../../assets/interfaz/coordinadora.jpeg'
import { Link } from 'react-router-dom'

const NosotrosBody = () => {
    return (
        <section className='NosotrosBodySection'>
            <div className='NosotrosBodyContainer'  >
                <div className='NosotrosBodyContainerCard'> 
                <h1>NOSOTROS</h1>
                <p className='NosotrosBodyContainerP'>Somos Alida y Alejandra, directoras del centro CETENID, 
                hace más de 20 años que comenzamos a trabajar juntas en el área de discapacidad. 
                Fuimos docentes en la carrera de Estimulación Temprana; y fue allí donde surgió el
                 proyecto de un Centro en Haedo enfocado al área de discapacidad, el cual le brinde a los niños y 
                jóvenes un espacio diferente donde trabajar con seriedad, respeto y profesionalismo 
                sin perder de vista las individualidades de cada concurrente y de su grupo familiar.
                 Hace ya más de 15 años que nuestro proyecto se hizo realidad y nos enorgullece y alegra ver el progreso de
                  nuestros concurrentes, asi como el compromiso y apoyo de las familias que confían y 
                  son parte de CETENID . </p></div></div>

            <div className='nosotrosContainerImgEquipo'><div ><img src={CetenidEquipo} alt="" /></div></div>


            <div className='NosotrosContainerEquipoDirectivoCard'><h2>Equipo Directivo</h2>
                <div>
                    <div className="card w-96  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={socias} alt="Shoes" className="rounded-xl" />
                        </figure>

                    </div>
                </div>
                <div className='NosotrosContainerEquipoDirectivo'>
                    <div className="card w-96  shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">Dra. Alida Belen Güiraldes</h3>
                            <p>Médica Especialista en Pediatría y en Psiquiatría
                                Infanto-Juvenil.
                            </p>
                            <p>M.N. 89185- M.P. 227 505 </p>
                            <p>Directora Médica</p>
                        </div>
                    </div>
                    <div className="card w-96  shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">Lic. L. Alejandra Gonzalez Aguirre</h3>
                            <p>Licenciada en Psicopedagogia / Estimuladora Temprana.</p>
                            <p>M.P. 591</p>
                            <p>Directora Psicopedagógica</p>

                        </div>
                    </div></div>
                <div className='centeer'><h4 className='NosotrosCoordinadoraTexto'>Coordinadora General</h4>
                    <div className="card w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={coordinadora} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">VALERIA D'AMICO</h3>
                            <p>Psicomotricista y Estimuladora Temprana.</p>
                            <p>Coordinadora General</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='homeContainerComoTrabajamos'>
              <Link to={"/Contacto"}>Dejanos un mensaje</Link>
            </div>
        </section>
    )
}

export default NosotrosBody
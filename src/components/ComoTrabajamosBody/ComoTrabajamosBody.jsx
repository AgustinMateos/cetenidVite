import React from 'react'
import comoTrabajamos16 from '../../assets/interfaz/comoTrabajamos16.jpg'
import logoComoTrabajamos from '../../assets/iconos/logoComoTrabajamos.png'
import comotrabajamos2 from '../../assets/interfaz/23.jpg'
import { Link } from 'react-router-dom'


const ComoTrabajamosBody = () => {

    return (

        <section className='comoTrabajamosSection'>
            <div >
                <div className='comoTrabajamosContainer' >
                    <div className='comoTrabajamosContainerImg'>
                        <img src={comoTrabajamos16} alt="" />
                    </div>
                    <div className='comoTrabajamosContainerTexto'>
                        <h1 >Como Trabajamos</h1>
                        <p className='comoTrabajamosContainerTexto2'>Nuestro CET brinda una atención personalizada
                            (individual y grupal) de lunes a viernes, en Haedo de 8.30 a 15.30 hs.
                            mediante grupos reducidos de chicos de similares características y
                            edades, a cargo de una Orientadora (profesional del área de la salud)
                            y una Auxiliar permanente en cada sala. CETENID brinda sus
                            servicios a través de dos modalidades: Jornada Simple y Jornada Doble.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='comoTrabajamosContainerProfesionesTitulo'><h2>Algunas de nuestras Terapias...</h2></div>
                <div className='comoTrabajamosContainerProfesiones'>
                    <div>
                        <ul>
                            <li>PSICOLOGÍA</li>
                            <li>PSICOPEDAGOGÍA</li>
                            <li>PSICOMOTRICIDAD</li>
                        </ul>
                    </div>
                    <div>
                        <img className='comoTrabajamosContainerProfesionesImg' src={logoComoTrabajamos} alt="" />
                    </div>
                    <div>
                        <ul>
                            <li>PSICOLOGÍA</li>
                            <li>PSICOPEDAGOGÍA</li>
                            <li>PSICOMOTRICIDAD</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div >
                <div className='comoTrabajamosContainer' >

                    <div className='comoTrabajamosContainerTexto'>
                        <p className='comoTrabajamosContainerTexto2'>
                            En Cetenid trabajamos con talleres, actividades, juegos y salidas que promueven el
                            autovalimiento en las AVD (actividades de los niños en la vida diaria), la integración e
                            inserción a la sociedad y donde los chicos aprenden a compartir, comunicarse
                            y relacionarse con el otro.</p>
                    </div><div className='comoTrabajamosContainerImg'>
                        <img src={comotrabajamos2} alt="" />
                    </div>
                </div>
            </div>
            <div className='homeContainerComoTrabajamos'>
                <Link to={"/Nosotros"}>Vení a conocernos</Link>
            </div>

        </section>
    )

}

export default ComoTrabajamosBody
import React from 'react'
import comoTrabajamos16 from '../../assets/interfaz/comoTrabajamos16.jpg'

const ComoTrabajamosBody = () => {
    return (
        <section>
            <div className='comoTrabajamosContainerPrincipal'>
                <div className='comoTrabajamosPrimerContainer'> 
                    <div className='comoTrabajamosPrimerContainerImg'>
                        <img className='comoTrabajamosImg' src={comoTrabajamos16} alt="" />
                    </div>
                    <div>
                        <h1>Como Trabajamos</h1>
                        <p>Nuestro CET brinda una atención personalizada
                        (individual y grupal) de lunes a viernes, de 8.30 a 15.30 hs.
                        en Haedo mediante grupos reducidos de similares características y
                        edades, a cargo de una Orientadora (profesional del área de la salud)
                        y una Auxiliar permanente en cada sala. CETENID brinda sus
                        servicios a través de dos modalidades: Jornada Simple y Jornada Doble.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComoTrabajamosBody
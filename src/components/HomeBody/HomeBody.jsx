import React from 'react'
import desayunoHome from '../../assets/interfaz/desayunoHome.jpg'
import '../../styles/styles.css'
import Hombres from '../../assets/iconos/Hombres.svg'
import relojNegro from '../../assets/iconos/relojNegro.svg'
import acompanamiento from '../../assets/iconos/acompanamiento.svg'
const HomeBody = () => {
  return (
    <>
    <div className='homeContainerTextoPrincipal'>
      <div className="card card-side bg-base-100 ">
        <div className="homeContainerTextoPrincipal1">
          <h1>CETENID</h1>
          <p>Somos CETENID (Centro Educativo Terapéutico y de Estimulación para Niños Discapacitados), un CET que trabaja con niños y adolescentes con patologías neuromotoras y/o sensoriales, asociadas a deficiencias de la comunicación y déficit intelectual.
            </p>
            <p>Estamos convencidos que siempre se puede aprender algo más, que lo más importante es que nuestros chicos se sientan felices, contenidos y con ganas de venir, que encuentren en Cetenid su lugar de pertenencia y formemos una gran familia.</p></div>
      </div>
      <div className='homeContainerTextoPrincipal2'>
        <div>
          <img src={Hombres} alt="" />
          <div><h3>Rango Etario</h3>
          <p>Cetenid trabaja con niños y adolescentes de 6 a 18 años.</p>
        </div>
      </div>
        <div><img src={relojNegro} alt="" />
          <div> <h3>Actividades Recreativas</h3>
          <p>Acompañamos dentro y fuera del aula.</p></div>
         </div>
        <div>
          <img src={acompanamiento} alt="" />
          <div>
            <h3>Horario de Clases</h3>
          <p>Lunes a Viernes de 8:30 a 15:30 hs.</p>
          </div>
          </div>
        </div>
    </div>
      

      <div className="homeCardContainerDesayunoPileta bg-base-100 shadow-xl">
        <figure>
          <img src={desayunoHome} alt="Movie" />
        </figure>
        <div className="card-body">
          
          <p>LA INSTITUCIÓN BRINDA EL DESAYUNO AL LLEGAR Y EL ALMUERZO AL MEDIODÍA.</p>
        </div>
      </div>

      <div className="card card-sidee bg-base-100 shadow-xl">

        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
        <figure>
          <img src={desayunoHome} alt="Movie" />
        </figure>
      </div>
    </>


  )
}

export default HomeBody
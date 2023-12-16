import React, { useEffect } from 'react'
import desayunoHome from '../../assets/interfaz/desayunoHome.jpg'
import homecard30 from '../../assets/interfaz/homecard30.jpg'
import '../../styles/styles.css'
import Hombres from '../../assets/iconos/Hombres.svg'
import relojNegro from '../../assets/iconos/relojNegro.svg'
import acompanamiento from '../../assets/iconos/acompanamiento.svg'
import whatsapp from '../../assets/iconos/whatsapp.png'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
const HomeBody = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);


  return (
    <main className="homeBodyContainer ">
      <a className='whatsapp'  href="https://wa.me/1526175981"><img src={whatsapp} alt="" /></a>
      <div className='homeContainerTextoPrincipal'>
        <div className=" ">
          <div  className="homeContainerTextoPrincipal1">
            <h1 data-aos="fade-left">CETENID</h1>
            <p>Somos <strong className='cetenidStrong'>CETENID</strong>  (Centro Educativo Terapéutico y de Estimulación para Niños Discapacitados), un CET en Haedo que trabaja con niños y adolescentes con patologías neuromotoras y/o sensoriales, asociadas a deficiencias de la comunicación y déficit intelectual.
            </p>
            <p>Estamos convencidos que siempre se puede aprender algo más, que lo más importante es que nuestros chicos se sientan felices, contenidos y con ganas de venir, que encuentren en Cetenid su lugar de pertenencia y formemos una gran familia.</p></div>
            <div className='homeContainerComoTrabajamos'>
              <Link to={"/ComoTrabajamos"}>Como Trajamos?</Link>
            </div>
        </div>
        
        <div className='homeContainerTextoPrincipal2'>
          <div>
            <img src={Hombres} alt="" />
            <div className='homeContainerTextoPrincipal2Texto'>
              <h3>RANGO ETARIO</h3>
            <p>En Cetenid trabajamos con niños y adolescentes de 6 a 18 años.</p></div>
          </div>
          <div >
            <img src={relojNegro} alt="" />
            <div className='homeContainerTextoPrincipal2Texto'> <h3>ACTIVIDADES RECREATIVAS</h3>
              <p>Acompañamos dentro y fuera del aula.</p></div>
          </div>
          <div >
            <img src={acompanamiento} alt="" />
            <div className='homeContainerTextoPrincipal2Texto'>
              <h3>HORARIO DE CLASES</h3>
              <p>Lunes a Viernes de 8:30 a 15:30 hs.</p></div>
          </div>
        </div>
      </div>

      <div className='homeBodyCardsContainer elemento' >
      <div className='homeBodyCardsContainerImgTexto  '  >
        <figure>
          <img src={desayunoHome} alt="Movie" />
        </figure>
        <div >
          <p>LA INSTITUCIÓN BRINDA EL DESAYUNO AL LLEGAR Y EL ALMUERZO AL MEDIODÍA.</p>
        </div>
      </div></div>
      <div className='homeBodyCardsContainer elemento' >
      <div className='homeBodyCardsContainerImgTexto'  >
        
        <div >
          <p>DURANTE ENERO Y FEBRERO COMPARTIMOS ACTIVIDADES MÁS LÚDICAS Y
                            RECREATIVAS AL AIRE LIBRE EN
                            NUESTRO PARQUE.</p>
        </div><figure>
          <img src={homecard30} alt="Movie" />
        </figure>
      </div></div>
      <div className=' homeContainerDondeEstamos'><Link to={"/Contacto"}>Donde Estamos?</Link></div>
    </main>


  )
}

export default HomeBody
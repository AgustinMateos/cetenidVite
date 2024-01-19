import React from 'react'
import logoCetenidSimple from '../../assets/iconos/logoComoTrabajamos.png'
import nenesjugandoCetenid from '../../assets/slider/sliderP13.jpg'
import neneTelefono from '../../assets/interfaz/17.jpg'
import neneBailandoCetenid from '../../assets/slider/sliderP13.jpg'
import neneDisfrazadoCetenid from '../../assets/slider/sliderP12.jpg'
import nenesCetenid from '../../assets/slider/sliderP4.jpg'
import nenaJugandoCetenid from '../../assets/interfaz/23.jpg'
import nenePintandoCetenid from '../../assets/interfaz/2.jpg'
import nenaCetenid from '../../assets/interfaz/18.jpg'
import CetenidEquipo from "../../assets/interfaz/CetenidEquipo.jpeg"
import cetenidTerapia from '../../assets/interfaz/15.jpg'
import cetenidPileta from '../../assets/interfaz/homecard30.jpg'
const GaleriaBody = () => {
  return (
    <div className="galeriaContainer">
      <div className="galeriaContainerTitulo">
        <h1 className='galeriaTitulo'>Galería Cetenid</h1>
      </div>
      <div className='galeriaContainerSliders'>
        <div className='galeriaSliders'>
          <div className="carousel  rounded-box">
            <div className="carousel-item galeriaContainerImg">
              <img src={neneTelefono} alt="Burger" />
            </div>
            
            <div className="carousel-item galeriaContainerImg">
              <img src={neneDisfrazadoCetenid} alt="Burger" />
            </div>
            <div className="carousel-item galeriaContainerImg">
              <img src={nenesCetenid} alt="Burger" />
            </div>
            <div className="carousel-item galeriaContainerImg">
              <img src={nenaJugandoCetenid} alt="Burger" />
            </div>
            <div className="carousel-item galeriaContainerImg">
              <img src={nenePintandoCetenid} alt="Burger" />
            </div>
            
          </div>
          <div className="carousel rounded-box">
            <div className="carousel-item galeriaContainerImg ">
              <img src={nenaCetenid} alt="Burger" />
            </div>
            <div className="carousel-item galeriaContainerImg">
              <img src={CetenidEquipo} alt="Burger" />
            </div>
            <div className="carousel-item galeriaContainerImg">
              <img src={cetenidTerapia} alt="Burger" />
            </div>
            <div className="carousel-item galeriaContainerImg">
              <img src={cetenidPileta} alt="Burger" />
            </div>
            <div className="carousel-item galeriaContainerImg">
              <img src={neneBailandoCetenid} alt="Burger" />
            </div>
            
          </div>
        </div>

      </div>
      <div className='galeriaContainerTituloSecundario'><img className='galeriaContainerTituloSecundarioImg' src={logoCetenidSimple} alt="" /><h2 className="galeriaTituloSecundario">Jugamos, aprendemos y nos divertimos...</h2><img className="galeriaContainerTituloSecundarioImg" src={logoCetenidSimple} alt="" /></div>
      <div className='galeriaContainerJugamosImg'><img src={nenesjugandoCetenid} alt="" /></div>
    </div>

  )
}

export default GaleriaBody
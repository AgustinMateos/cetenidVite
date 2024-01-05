import React from 'react'
import neneJugando from '../../assets/interfaz/18.jpg'
import nenePintando from '../../assets/interfaz/26.jpg'
import neneDibujando from '../../assets/interfaz/20.jpg'
import nenesInteractuando from '../../assets/slider/sliderP4.jpg'
import nenesSentados from '../../assets/slider/sliderP9.jpg'
import nenesBailando from '../../assets/slider/sliderP12.jpg'
import nenesBailando2 from '../../assets/interfaz/comoTrabajamos2.jpg'

const GaleriaBody = () => {
  return (
    <div className='galeriaBodyContainer'>
      <div> {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenePintando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenesInteractuando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenesSentados}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={neneDibujando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenesBailando2}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenesBailando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={neneJugando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>

      </dialog>
    </div>
    </div>

  )
}

export default GaleriaBody
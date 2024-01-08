
import React, { useEffect, useState } from 'react';
import neneJugando from '../../assets/interfaz/18.jpg'
import nenePintando from '../../assets/interfaz/26.jpg'
import neneDibujando from '../../assets/interfaz/20.jpg'
import nenesInteractuando from '../../assets/slider/sliderP4.jpg'
import nenesSentados from '../../assets/slider/sliderP9.jpg'
import nenesBailando from '../../assets/slider/sliderP12.jpg'
import nenesBailando2 from '../../assets/interfaz/comoTrabajamos2.jpg'
import neneHablandoTelefono from '../../assets/interfaz/17.jpg'
import neneBeso from '../../assets/interfaz/2.jpg'
import ModalCard from './ModalCard';



  const GaleriaBody = () => {

    const [ imagenes , setImagenes ] = useState([]);

    useEffect(() => {
      setImagenes([]);
    }, [] );

    const imagenes1 = [ { id:1 , img:nenePintando },{ id:2 , img:nenesInteractuando }, { id:3 , img:nenesSentados  } ];
    const imagenes2 = [ { id:2 , img:nenesInteractuando }, { id:3 , img:nenesSentados  } , { id:1 , img:nenePintando }  ];

    

    return (
    <div className='galeriaBodyContainer'> {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="galeriaBodyCards" onClick={() => {
                                                            setImagenes( imagenes1 );
                                                            document.getElementById('my_modal_3').showModal()}}>
        <img src={nenePintando}/>
      </button>
      <button className="galeriaBodyCards" onClick={() => { 
                                                            setImagenes( imagenes2 );
                                                            document.getElementById('my_modal_3').showModal() }}>
        <img src={nenesInteractuando}/>
      </button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenesSentados}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={neneDibujando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenesBailando2}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={nenesBailando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={neneJugando}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={neneHablandoTelefono}/></button>
      <button className="galeriaBodyCards" onClick={() => document.getElementById('my_modal_3').showModal()}><img src={neneBeso}/></button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="carousel w-full">
            {
              imagenes.map( imagen => <ModalCard key={ imagen.id } {...imagen }/>)
            }
            
          </div>
        </div>
      </dialog>
      
      
    </div>
  );
};

export default GaleriaBody;
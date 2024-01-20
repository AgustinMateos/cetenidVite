 import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import ContactForm from './Formulario'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
 
export default function Example() {
    const [agreed, setAgreed] = useState(false)

    return (
        <section className='contactoSectionContainer'>
            <div className='contactoContainer'>
                <div className='contactoContainerInfo'>
                    <h1 className='contactoContainerInfoTitulo'>CONTACTO</h1>
                    <ul>
                        <li><h3 className='contactoContainerInfoTitulos'>Horarios:</h3><p className='contactoContainerInfoTitulosP'>
                            Lunes a Viernes de 8:30 a 15.30 hs.</p></li>
                        <li><h3 className='contactoContainerInfoTitulos'>Dirección:</h3><p className='contactoContainerInfoTitulosP'>Chacabuco 157. Haedo. Provincia de Buenos Aires. C.P. 1706</p></li>
                        <li><h3 className='contactoContainerInfoTitulos'>Como llegar:</h3><p className='contactoContainerInfoTitulosP'>Colectivos: 153 - 163 - 136 - 182 - 166 - 326

                            Tren del Oeste (ex Sarmiento)</p></li>
                        <li><h3 className='contactoContainerInfoTitulos'>Teléfonos:</h3>
                            <p className='contactoContainerInfoTitulosP'>(011) 4659 7623 - Teléfono Fijo</p>
                            <p className='contactoContainerInfoTitulosP'>(011) 5893 7466 - Dra. Güiraldes</p>
                            <p className='contactoContainerInfoTitulosP'>(011) 4041 0303 - Lic. Gonzalez A.</p>
                            <p className='contactoContainerInfoTitulosP'>(011) 15 2617-5981</p></li>

                        <li><h3 className='contactoContainerInfoTitulos'>Email:</h3><p className='contactoContainerInfoTitulosP'>
                            info@cetenid.com</p></li>
                    </ul>
                </div>
                <div className='containerContactForm'>
                    <ContactForm />
                </div>
            </div>

        </section >
    )
}

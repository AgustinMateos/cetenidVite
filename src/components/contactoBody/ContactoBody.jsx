/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

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
                        <li><h3 className='contactoContainerInfoTitulos'>Dirección:</h3><p  className='contactoContainerInfoTitulosP'>Chacabuco 157. Haedo. Provincia de Buenos Aires. C.P. 1706</p></li>
                        <li><h3 className='contactoContainerInfoTitulos'>Como llegar:</h3><p className='contactoContainerInfoTitulosP'>Colectivos: 153 - 163 - 136 - 182 - 166 - 326

                            Tren del Oeste (ex Sarmiento)</p></li>
                        <li><h3 className='contactoContainerInfoTitulos'>Teléfonos:</h3>
                            <p  className='contactoContainerInfoTitulosP'>(011) 4659 7623 - Teléfono Fijo</p>
                            <p  className='contactoContainerInfoTitulosP'>(011) 5893 7466 - Dra. Güiraldes</p>
                            <p  className='contactoContainerInfoTitulosP'>(011) 4041 0303 - Lic. Gonzalez A.</p>
                            <p  className='contactoContainerInfoTitulosP'>(011) 15 2617-5981</p></li>
                        <li><h3 className='contactoContainerInfoTitulos'>Horarios:</h3><p  className='contactoContainerInfoTitulosP'>
                            Lunes a Viernes de 8:30 a 15.30 hs.</p></li>
                        <li><h3 className='contactoContainerInfoTitulos'>Email:</h3><p className='contactoContainerInfoTitulosP'>
                            info@cetenid.com</p></li>
                    </ul>
                </div>
                <div>
                    <div className="isolate  px-6   ">

                        <div className="mx-auto max-w-2xl">
                            <h2 className=" contactoContainerTitulo2">CETENID</h2>
                             <p className='contactoContainerTitulo3'>Contactate y con gusto te asesoramos.</p>
                        </div>
                        <form action="#" method="POST" className="mx-auto  ">
                            <div className="grid grid-cols-1  sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Nombre Completo
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Télefono
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="contactoContainerButtonEnviar  " >
                                <button
                                    
                                    className="contactoContainerButtonEnviarTexto  "
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section >
    )
}

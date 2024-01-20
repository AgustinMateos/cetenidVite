import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes enviar los datos a tu servidor o realizar otras acciones con ellos

    // Marcamos el formulario como enviado con éxito
    setIsSubmitted(true);
  };

  return (
    <div className='contactoSectionContainer'>
      <h2 className='contactoContainerTitulo2'>CETENID</h2>
      <h4>Contactate y con gusto te asesoramos.</h4>

      {isSubmitted ? (
        <p className='mensajeEnviado'>Mensaje enviado con éxito. ¡Gracias!</p>
      ) : (
        <form className='formDisplayFlex' onSubmit={handleSubmit(onSubmit)}>
          <div className='contactoContainerInputs'>
            <div className='contactoInputs'>
              <input placeholder='Nombre Completo:' {...register('fullName', { required: true })} />
              {errors.fullName && <span className='mensajeErrorForm'>Este campo es requerido</span>}
            </div>
            <div className='contactoInputsEmailTelefono'>
              <div className='contactoContainerInput'>
                <input placeholder='Email:' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span className='mensajeErrorForm'>Ingrese un correo electrónico válido</span>}
              </div>
              <div className='contactoContainerInput '>
                <input placeholder='Teléfono:' {...register('phone', { required: true, pattern: /^[0-9]+$/ })} />
                {errors.phone && <span className='mensajeErrorForm'>Ingrese un número de teléfono válido</span>}</div>

            </div>

            <div className='contactoInputsTextArea'>
              <textarea placeholder='Mensaje:' {...register('message', { required: true })} />
              {errors.message && <span className='mensajeErrorForm'>Este campo es requerido</span>}
            </div>
            <div className='formularioContainerEnviar'><button className='contactoContainerButtonEnviarTexto' type="submit">Enviar</button></div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;



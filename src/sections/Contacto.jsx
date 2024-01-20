
import React, { useState, useEffect } from 'react';
import Formulario from '../components/contactoBody/ContactoBody';
import Spinner from '../components/Generals/Spinner';
import Navbar from '../components/Generals/Navbar'
import Footer from '../components/Generals/Footer'
const Contacto = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="contactoMainContainer">
      {loading ? (
        <Spinner />
      ) : (
        <>
        <Navbar/>
          <Formulario />
          <div className="containerContactoMap">
            <iframe
              
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.432072582464!2d-58.5870167!3d-34.6456603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc78fc308b243%3A0xc29258554082de11!2sCetenid%20-Discapacidad!5e0!3m2!1ses-419!2sar!4v1702338758132!5m2!1ses-419!2sar"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Footer/>
        </>
        
      )}
     
    </main>
  );
};

export default Contacto;





import React,{ useState, useEffect } from 'react'
import Navbar from '../components/Generals/Navbar'
import NosotrosBody from '../components/NosotrosBody/NosotrosBody'
import Footer from '../components/Generals/Footer'
import Spinner from '../components/Generals/Spinner';



const Nosotros = () => {
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
          <NosotrosBody/>
          <Footer/>
        </>
        
      )}
     
    </main>
  );
};

export default Nosotros;
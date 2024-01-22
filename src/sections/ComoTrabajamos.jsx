import ComoTrabajamosBody from '../components/ComoTrabajamosBody/ComoTrabajamosBody'
import React,{ useState, useEffect }  from 'react'
import Navbar from '../components/Generals/Navbar'
import Footer from '../components/Generals/Footer'
import Spinner from '../components/Generals/Spinner'


const ComoTrabajamos = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="contactoMainContainer">
      {loading ? (
        <Spinner />
      ) : (
        <>
        <Navbar/>
        <ComoTrabajamosBody/>
        <Footer/>
        </>
        
      )}
     
    </main>
  );
};

export default ComoTrabajamos
import React,{ useState, useEffect }  from 'react'
import GaleriaBody from '../components/GaleriaBody/GaleriaBody'
import Navbar from '../components/Generals/Navbar'
import Footer from '../components/Generals/Footer'
import Spinner from '../components/Generals/Spinner'


const Galeria = () => {
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
        <GaleriaBody/>
        <Footer/>
        </>
        
      )}
     
    </main>
  );
};

export default Galeria


 





// const HomePage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); 

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="contactoMainContainer">
//       {loading ? (
//         <Spinner />
//       ) : (
//         <>
//         <Navbar/>
//           <Slider/>
//           <HomeBody/>
//           <Footer/>
//         </>
        
//       )}
     
//     </main>
//   );
// };

// export default HomePage;




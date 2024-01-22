import React,{ useState, useEffect }  from 'react'
import Slider from '../components/Generals/Slider'
import HomeBody from '../components/HomeBody/HomeBody'
import Navbar from '../components/Generals/Navbar'
import Footer from '../components/Generals/Footer'
import Spinner from '../components/Generals/Spinner'





const HomePage = () => {
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
          <Slider/>
          <HomeBody/>
          <Footer/>
        </>
        
      )}
     
    </main>
  );
};

export default HomePage;




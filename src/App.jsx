import './styles/styles.css'
import './App.css'
import Homepage from './sections/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Generals/Navbar'
import Footer from './components/Generals/Footer'
import ComoTrabajamos from './sections/ComoTrabajamos'
import Contacto from './sections/Contacto'


function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>


      <Route exact path="/" element={<Homepage/>}/>
      <Route path="/ComoTrabajamos" element={<ComoTrabajamos/>}/>
      <Route  path="/Contacto" element={<Contacto/>}/>

     
      </Routes>
      <Footer/>

    </BrowserRouter>
  )
}

export default App

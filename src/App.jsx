import './styles/styles.css'
import './App.css'
import Homepage from './sections/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComoTrabajamos from './sections/ComoTrabajamos'
import Contacto from './sections/Contacto'
import Nosotros from './sections/Nosotros'
import Galeria from './sections/Galeria'


function App() {


  return (
    <BrowserRouter>
    
      <Routes>


      <Route  path="/" element={<Homepage/>}/>
      <Route path="/ComoTrabajamos" element={<ComoTrabajamos/>}/>
      <Route path="/Nosotros" element={<Nosotros/>}/>
      <Route path="/Galeria" element={<Galeria/>}/>
      <Route  path="/Contacto" element={<Contacto/>}/>

     
      </Routes>
      

    </BrowserRouter>
  )
}

export default App

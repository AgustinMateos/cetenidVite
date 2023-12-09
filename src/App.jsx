import './styles/styles.css'
import './App.css'
import Homepage from './sections/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Generals/Navbar'
import Footer from './components/Generals/Footer'


function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>


      <Route exact path="/" element={<Homepage/>}/>

     
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App

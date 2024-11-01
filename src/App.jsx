import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import PlaceCard from './components/PlaceCard'
function App() {

  return (
    <>
    <Header/>
 <Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/services'element={<Services/>}/>
  <Route path='/products'element={<Products/>}/>
 </Routes>
 <PlaceCard/>
<Footer/>

    </>
  )
}

export default App

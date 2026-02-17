
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Signup from './Pages/Signup'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
  <Route path='/' element={<Shop />} />
  <Route path='/men' element={<Shopcategory banner={men_banner} category="men" />} />
  <Route path='/women' element={<Shopcategory banner={women_banner} category="women" />} />
  <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kids" />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/product' element={<Product />} />         
  <Route path='/product/:productId' element={<Product />} />  
  <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Signup />} />
</Routes>

     </BrowserRouter>
    </>
  )
}

export default App

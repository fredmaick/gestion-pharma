import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import About from './pages/about'
import Products from './pages/products'
import ProductsList from './pages/productsList'
import SingleProduct from './pages/singleProduct'
import NavBar from './components/navBar'

function App() {

  return(
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}> 
          <Route index element ={<ProductsList/>} />
          <Route path=':id' element ={<SingleProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
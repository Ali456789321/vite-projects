import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './features/Cart'
import Home from './features/Home'
import './index.css'
import Nav from './features/Nav'


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

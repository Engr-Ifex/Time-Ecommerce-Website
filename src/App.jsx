import {Route, Routes} from 'react-router'
import Home from './Components/Home'
import Details from './Components/Details'
import Cart from './Components/cart'
import Payment from './Components/Payment'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/payment' element={<Payment/>}/>
    </Routes>
    </>
  )
}

export default App

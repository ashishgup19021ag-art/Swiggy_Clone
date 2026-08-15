import { useState } from 'react'
// import './index.css'
import Restaurent from './components/Restaurent'
import { Home } from './components/Home'
import {BrowserRouter,Routes,Route} from 'react-router'
import { Restaurentmenu } from './components/Foodrecomended_Food/Restaurentmenu'
import { Secondheader } from './components/Insideheader/Secondheader'
import { store } from './Store/Store'
import {Provider} from "react-redux"
import { Checkout } from './components/Checkout/Checkout'


function App() {
  return(
    <>
    <Provider store = {store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route element={<Secondheader></Secondheader>}>
      <Route path='/restaurent' element={<Restaurent></Restaurent>}></Route>
      <Route path='/city/delhi/:id' element={<Restaurentmenu></Restaurentmenu>}></Route>
      </Route>
      <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>    
  )
}

export default App

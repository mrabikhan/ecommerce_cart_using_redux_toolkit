import React from 'react'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Checkout from './components/Checkout'
import Contact from './components/Contact'
import SignIn from './components/SignIn'
import Home from './components/Home'
function App() {
  return (
    <Router>
    <Toaster position="top-right" />
      <Routes>
        
        <Route path='/' element = {<ProductList />} />
        <Route path='/home' element = {<Home />}/>
        <Route path='/cart' element = {<Cart />}/>
        <Route path='/checkout' element = {<Checkout />} />
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/signin' element = {<SignIn />}/>
      </Routes>
    </Router>
  )
}

export default App

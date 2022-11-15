import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import SignUp from '../pages/SignUp'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to = 'home'/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="shop/:id" element={<ProductDetails/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
    </Routes>
  )
}

export default Routers

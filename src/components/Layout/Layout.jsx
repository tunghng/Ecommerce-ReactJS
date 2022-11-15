import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import './layout.scss'

const Layout = () => {
  return (
    <>
        <Header/>
            <div>
                <Routers/>
            </div>
        <Footer/>
    </> 
  )
}

export default Layout

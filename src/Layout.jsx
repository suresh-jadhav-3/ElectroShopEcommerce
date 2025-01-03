import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout({cart}) {
  return (
    <div>
        <NavBar cart={cart}/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default Layout

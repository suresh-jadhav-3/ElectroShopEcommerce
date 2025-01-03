import React from 'react'
import {NavBar, Footer} from './components'
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

import React from 'react'
import Header from '../template/Header'
import Footer from '../template/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
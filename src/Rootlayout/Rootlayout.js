import React from 'react'
import Header from '../Molecules/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Molecules/Footer/Footer';

const Rootlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Rootlayout
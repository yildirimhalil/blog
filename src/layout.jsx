import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='bg-gradient-to-r from-purple-200 to-white min-h-screen'>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout;
import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer from '../../components/home/Footer'
import Header from '../../components/home/Header'


const HomePage = () => {
    return (
        <div className='container'>
            <Header />


            <Outlet />
            <Footer />
        </div>
    )
}

export default HomePage

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="page-container">
        <Navbar/>
        <div style={{flex: 1}}>
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
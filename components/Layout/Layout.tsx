import React from 'react'
import Navbar from '@components/Navbar/Navbar'
//import hell >:v
const Layout: React.FC = ({children}) => {
  return (
      <>
      <Navbar/>
        {children}
        <footer>
            hi- footer 🦶🏽
        </footer>
      </>
  )
}

export default Layout
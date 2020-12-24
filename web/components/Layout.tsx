import React from 'react';
import Header from './Header'
const Layout: React.FC = ({children}) => {
  return (
    <div className= "max-w-5xl mx-auto px-4 sm:px-6 md:px-7">
        <Header/>
        <div className="border-b-2 border-gray-500"></div>
        {children}
    </div>  
  )
  ;
}

export default Layout;
import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'



const Header: React.FC = () => {

    return (
        <header className="">
            <div className="flex justify-center py-8 md: justify-evenly  py-2 md:py-4 items-center " >
        
            <Link href="/" >
                <a>

                    <Image  src= '/img/brook.gif' alt="rei" height = {100} width= {100}
                        className="rounded-full flex " 
                        />
                </a>
            </Link>

            <nav className ="hidden sm:block space-x-8 md:block space-x-8">
                <Link href="/" >
                    <a className="tracking-wide hover:text-gray-300 text-lg font-medium " >Home</a>
                </Link>
                
                <Link href="/">
                    <a className="tracking-wide hover:text-gray-300 text-lg font-medium" >About</a>
                </Link>
                
                <Link href="/">
                    <a className="tracking-wide hover:text-gray-300 text-lg font-medium " >Contact</a>
                    
                </Link>
                

            </nav>
            <div className="block sm:hidden ">
                <button type="button">
                    
                    <svg className="h-7 w-7 rounded-full " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg> 
                    
                    
                </button>
            </div>
        </div>
        <div  className="px-4 pt-2 pb-4 border-t-2 border-gray-500 border-b-2 " >
            <Link href="/" >
                <a className="text-center block tracking-wide py-1 hover:text-gray-300 rounded hover:bg-gray-700 text-lg font-semibold " >Home</a>
            </Link>
            
            <Link href="/">
                <a className="text-center block tracking-wide py-1 hover:text-gray-300 rounded hover:bg-gray-700 text-lg font-semibold" >About</a>
            </Link>
            
            <Link href="/">
                <a className="text-center block tracking-wide py-1 hover:text-gray-300 rounded hover:bg-gray-700 text-lg font-semibold " >Contact</a>
                
            </Link>
        </div>
            
      </header>
        
      
  );
}

export default Header;
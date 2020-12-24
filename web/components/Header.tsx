import Image from 'next/image'

import Link from 'next/link'



const Header: React.FC = () => {
  return (
      <header className="flex justify-center py-8 md: justify-evenly  py-2 md:py-4 items-center ">
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
            
            <svg className="h-7 w-7 rounded-full " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg> 
            
            
        </div>
      </header>
        
      
  );
}

export default Header;
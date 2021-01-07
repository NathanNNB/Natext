import React from 'react';
import GameItem from './GameItem';
import Header from './Header'
const Layout: React.FC = ({children}) => {
  return (
    <div className= "w-full mx-auto px-4 sm:px-6 md:px-7">
        <Header/>
        <GameItem
          href="/"
          img="/img/foto emo.jpg"
          title="A busca do Carlos Felino"
          genre="Emo"
          />
        {children}
    </div>  
  )
  ;
}

export default Layout;
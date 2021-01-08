import React from 'react';;
import Image from 'next/image';
import GameItem from './GameItem';
import Header from './Header';

const Layout: React.FC = ({children}) => {
  return (
    <div className= "w-6/7 mx-auto px-4 sm:px-6 sm:w-6/7 lg:w-2/3">
      <Header/>
      <div className="sm:flex justify-evenly flex-wrap">
        <GameItem
          href="/"
          img="/img/foto emo.jpg"
          title="A busca do Carlos Felino"
          genre="Emo"
          />

        <GameItem
          href="/"
          img="/img/luffy.jpg"
          title="O samba do pagodeiro"
          genre="Aventura"
          />

        <GameItem
          href="/"
          img="/img/rogerXonado.jpg"
          title="Roger adventuries"
          genre="Aventura"
          />

        </div>
      <div className="flex justify-center">

      <div className="flex flex-col justify-center">

        <div className=" pt-10 pb-10 ">
          <Image className="rounded-full" src="/img/frankSuper.gif" width={360} height={204}>

          </Image>

          <h2 className="font-bold flex justify-center italic">"Ey Ey Ey Supeerrr" </h2>
          <h2 className=" flex justify-center italic">-Franky</h2>
        </div>

        <div className=" ">
          
        </div>
      </div>

      </div>
      {children}
    </div>  
  )
  ;
}

export default Layout;
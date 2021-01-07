import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GameItemProps {
  href: string;
  img: string;
  title: string;
  genre: string;

}
const GameItem: React.FC<GameItemProps> = ({href, img, title, genre}) => {
  

  return (
      <div className="flex justify-center pt-5">
        <div className="w-85/100  bg-gray-500 rounded-lg pb-2 pr-2 pl-2" >

          <div className="flex justify-evenly pt-4 pr-1">
            <Link href={href}>
              <a>
                <Image  src= {img} alt="rei" height = {100} width= {100}
                            className="rounded-full flex " 
                            
                            />
              </a>
            </Link>

            <div className="text-gray-100 font-bold  text-sm pl-2">
            <h3 className="block flex justify-center pt-3 ">{title}</h3>
            <h3 className="block flex justify-center pt-3 ">{genre}</h3>
          </div>

          </div>
          
        </div >
      </div>
  );
}

export default GameItem;
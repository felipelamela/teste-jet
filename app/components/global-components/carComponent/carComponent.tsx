import Image from 'next/image'
import React from 'react'

interface CarInterface{
    img: string
    title:string
}

const CarComponent: React.FC<CarInterface> = ({ img, title }) => {
  return (
    <td className="w-1/5 px-6 py-4 text-sm relative items-center">
      <div className='w-50 h-50 flex items-center justify-center"'>
        <img src={img} className='max-w-full max-h-full ' alt="" />
      </div>
      <div className="absolute top-7 left-20">
        <p className='px-10'>{title}</p>
      </div>
    </td>
  );
};

export default CarComponent;

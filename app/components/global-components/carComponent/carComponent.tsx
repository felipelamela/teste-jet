import React from 'react'

interface CarInterface{
    img: string
    title:string
}

const CarComponent: React.FC<CarInterface> = ({ img, title }) => {
  return (
    <td className="md:w-4/12 md:px-0 md:py-0 md:text-sm md:relative md:items-center max-md:flex max-md:flex-row">
      <img src={img} className='max-md:col-span-2 md:size-[100px] w-[300px] basis-1/4' style={{ objectFit: 'contain' }} alt="" />
      <div className="md:absolute md:top-10 md:left-[90px] max-md:basis-1/4 ">
        <p className='md:px-10'>{title}</p>
      </div>
    </td>
  );
};

export default CarComponent;

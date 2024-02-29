import Image from 'next/image'
import React from 'react'

interface CarInterface{
    img: string
    title:string
}

const CarComponent:React.FC<CarInterface> = ({img, title}) => {
  return (
    <td className="w-1/5 px-6 py-4 text-sm flex items-center">
    <div className="w-1/2 mr-2" style={{ width: '80px' }}>
      <Image src="/mini.png" width={80} height={60} alt="Picture of the author" />
    </div>
    <div className="w-1/2">
      <p>Mini carro</p>
    </div>
  </td>
  )
}

export default CarComponent
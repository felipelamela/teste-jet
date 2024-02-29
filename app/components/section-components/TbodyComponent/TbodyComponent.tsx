'use client'
import React, { useEffect, useState } from 'react'
import CarComponent from '../../../components/global-components/carComponent/carComponent'
import ActionComponent from '../../global-components/actionComponent/actionComponent'
import RatingComponent from '../../global-components/ratingComponent/ratingComponent'
import StatusComponent from '../../global-components/statusComponent/statusComponent'
import NextReservationComponent from '../../global-components/nextReservationComponent/nextReservationComponent'

//É um exemplo de um retorno de uma possivel api para demonstrar o comportamento
const listTBody = [
  {
    carImage: '/mini.webp',
    carTitle: 'Mini Cooper',
    Status: true,
    DateReservation: '20/01',
    Rating: 3,
  },  {
    carImage: '/mini.webp',
    carTitle: 'Mini Cooper',
    Status: true,
    DateReservation: '22/07',
    Rating: 2,
  },  {
    carImage: '/mini.webp',
    carTitle: 'Mini Cooper',
    Status: false,
    DateReservation: '',
    Rating: 4,
  },  {
    carImage: '/mini.webp',
    carTitle: 'Mini Cooper',
    Status: true,
    DateReservation: '22/03',
    Rating: 3,
  },  {
    carImage: '/mini.webp',
    carTitle: 'Mini Cooper',
    Status: true,
    DateReservation: '22/03',
    Rating: 5,
  },
]

const TbodyComponent = () => {
  const [mobile, setMobile] = useState<boolean | null>(null)


  //esse useEffect serve tbm como exemplo de uma possivel API ou até mesmo de um Context
  useEffect(() => {
    const handleResize = () => {
      const larguraDaTela = window.innerWidth;
      if (larguraDaTela <= 767) {
        return setMobile(true)
      }
      return setMobile(false)
    };

    window.addEventListener('resize', handleResize);
    return () => {
      handleResize();
    };
  }, []);

  return (
      <tbody className="md:bg-white divide-y divide-gray-200 ">
      {listTBody.map((item, index) => (
        <tr className='relative w-screen' key={index}>
          <CarComponent img={item.carImage} title={item.carTitle} />
          <NextReservationComponent reservationDate={item.DateReservation} mobile={mobile} />
          <RatingComponent rating={item.Rating} />
          <StatusComponent status={item.Status} mobile={mobile} />  
          <ActionComponent />
        </tr>
        ))}
      </tbody>
  )
}

export default TbodyComponent
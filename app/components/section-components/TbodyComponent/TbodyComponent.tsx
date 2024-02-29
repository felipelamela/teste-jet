import React from 'react'
import CarComponent from '../../../components/global-components/carComponent/carComponent'
import ActionComponent from '../../global-components/actionComponent/actionComponent'
import RatingComponent from '../../global-components/ratingComponent/ratingComponent'
import StatusComponent from '../../global-components/statusComponent/statusComponent'
import NextReservationComponent from '../../global-components/nextReservationComponent/nextReservationComponent'

const listTBody = [
  {
    carImage: '/mini.png',
    carTitle: 'Mini',
    Status: true,
    DateReservation: '20/01',
    Rating: 3,
  },  {
    carImage: '/mini.png',
    carTitle: 'Mini',
    Status: true,
    DateReservation: '22/07',
    Rating: 2,
  },  {
    carImage: '/mini.png',
    carTitle: 'Mini',
    Status: false,
    DateReservation: '22/07',
    Rating: 4,
  },  {
    carImage: '/mini.png',
    carTitle: 'Mini',
    Status: true,
    DateReservation: '22/03',
    Rating: 3,
  },  {
    carImage: '/mini.png',
    carTitle: 'Mini',
    Status: true,
    DateReservation: '22/03',
    Rating: 5,
  },
]

const TbodyComponent = () => {
  return (
      <tbody className="bg-white divide-y divide-gray-200">
      {listTBody.map((item, index) => (
        <tr key={index}>
          <CarComponent img={item.carImage} title={item.carTitle} />
          <NextReservationComponent reservationDate={item.DateReservation} />
          <RatingComponent rating={item.Rating} />
          <StatusComponent status={item.Status} />  
          <ActionComponent />
        </tr>
        ))}
      </tbody>
  )
}

export default TbodyComponent
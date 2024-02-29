import React from 'react'
import CarComponent from '../../../components/global-components/carComponent/carComponent'
import ActionComponent from '../../global-components/actionComponent/actionComponent'
import RatingComponent from '../../global-components/ratingComponent/ratingComponent'
import StatusComponent from '../../global-components/statusComponent/statusComponent'
import NextReservationComponent from '../../global-components/nextReservationComponent/nextReservationComponent'

const TbodyComponent = () => {
  return (
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <CarComponent img='sd' title='asd' />
          <StatusComponent status='false' />
          <NextReservationComponent reservationDate='10' />
          <RatingComponent rating={3}/>
          <ActionComponent />
        </tr>
      </tbody>

  )
}

export default TbodyComponent
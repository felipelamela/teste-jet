import React from 'react'

interface ReservationDateInterface{
    reservationDate:string
}

const NextReservationComponent:React.FC<ReservationDateInterface> = ({reservationDate}) => {
  return (
      <td className="w-1/5 px-6 text-sm py-4">{reservationDate}</td>
  )
}

export default NextReservationComponent
import React from 'react'

interface ReservationDateInterface{
    reservationDate:string
}

const NextReservationComponent:React.FC<ReservationDateInterface> = ({reservationDate}) => {
  return (
      <td className="md:w-3/12 md:px-6 md:text-sm md:py-4 max-md:absolute max-md:left-[50%] max-md:top-[40px] text-[#686868]">{reservationDate}</td>
  )
}

export default NextReservationComponent
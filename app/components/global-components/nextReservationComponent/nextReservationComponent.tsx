import React from 'react'

interface ReservationDateInterface{
  reservationDate: string
  mobile: boolean | null
}

const NextReservationComponent: React.FC<ReservationDateInterface> = ({ reservationDate, mobile }) => {

  
  return (
      <td className="md:w-3/12 md:px-6 md:text-sm md:py-4 max-md:absolute max-md:left-[170px] max-md:top-[35px] text-[#686868]">{mobile? `Next Date: ` + reservationDate : reservationDate}</td>
  )
}

export default NextReservationComponent
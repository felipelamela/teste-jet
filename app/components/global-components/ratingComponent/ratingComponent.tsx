import React from 'react'

interface ratingInterface{
    rating:number
}
const RatingComponent: React.FC<ratingInterface> = ({ rating }) => {

  const starRating:{[key:string]: string} = {
    1: '★',
    2: '★ ★',
    3: '★ ★ ★',
    4: '★ ★ ★ ★',
    5: '★ ★ ★ ★ ★'
  }
  
  return (
    <td className="md:w-3/12 md:px-6 md:text-lg md:py-4 max-md:absolute max-md:z-10 max-md:top-[70px] max-md:left-[170px]">{starRating[rating]}</td>
  )
}

export default RatingComponent
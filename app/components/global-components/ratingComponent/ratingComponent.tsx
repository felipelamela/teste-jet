import React from 'react'

interface ratingInterface{
    rating:number
}
const RatingComponent: React.FC<ratingInterface> = ({ rating }) => {
  const rat = rating

  const starRating = {
    1: '★',
    2: '★ ★',
    3: '★ ★ ★',
    4: '★ ★ ★ ★',
    5: '★ ★ ★ ★ ★'
  }
  
  return (
      <td className="md:w-3/12 md:px-6 md:text-lg md:py-4 max-md:absolute">{starRating[rat]}</td>
  )
}

export default RatingComponent
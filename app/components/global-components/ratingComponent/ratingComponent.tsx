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
      <td className="w-1/5 px-6 text-sm py-4">{starRating[rat]}</td>
  )
}

export default RatingComponent
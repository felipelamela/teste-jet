import React from 'react'

interface ratingInterface{
    rating:number
}
const RatingComponent:React.FC<ratingInterface> = ({rating}) => {
  return (
      <td className="w-1/5 px-6 text-sm py-4">{rating}</td>
  )
}

export default RatingComponent
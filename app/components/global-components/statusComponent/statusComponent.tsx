import React from 'react'

interface StatusInterface{
    status: boolean
}

const StatusComponent: React.FC<StatusInterface> = ({ status }) => {

  if (status) {
    return (
      <>
      <td className="md:w-1/12 md:px-6 md:text-xs md:py-4 "><span className="md:inline-block md:bg-green-500 md:text-white md:px-2 md:py-1 md:rounded-full max-md:bg-green-500 max-md:w-6 max-md:h-6 max-md:rounded-full max-md:text-transparent">Available</span></td>
    </>
    )
  }
  
  return (
      <>
        <td className="md:w-1/12 md:px-6 md:text-xs md:py-4  "><span className="md:inline-block md:bg-red-500 md:text-white md:px-2 md:py-1 md:rounded-full max-md:bg-red-500 max-md:w-6 max-md:h-6 max-md:rounded-full max-md:text-transparent">Unavailable</span></td>
      </>
  )
}

export default StatusComponent
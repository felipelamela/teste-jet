import React from 'react'

interface StatusInterface{
    status: boolean
}

const StatusComponent: React.FC<StatusInterface> = ({ status }) => {

  if (status) {
    return (
      <>
      <td className="w-1/5 px-6 text-sm py-4"><span className="inline-block bg-green-500 text-white px-2 py-1 rounded-full">Available</span></td>
    </>
    )
  }
  
  return (
      <>
        <td className="w-1/5 px-6 text-sm py-4"><span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full">Unavailable</span></td>
      </>
  )
}

export default StatusComponent
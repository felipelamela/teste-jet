'use client'
import React, { useEffect, useState } from 'react'

interface StatusInterface{
  status: boolean
  mobile: boolean | null
}

const StatusComponent: React.FC<StatusInterface> = ({ status, mobile }) => {

  if (status) {
    return (
      <>
        <td className="md:w-1/12 md:px-6 md:text-xs md:py-4 "><span className="md:inline-block md:bg-green-500 md:text-white md:px-2 md:py-1 md:rounded-full max-md:bg-green-500 max-md:bg-green-500 max-md:w-7 max-md:h-7 max-md:rounded-full text-[#cffafe] max-md:pl-1 max-md:absolute max-md:top-[5px] max-md:text-2xl left-[5px]
      ">{mobile? "✓":"Avaliable"}</span></td>
    </>
    )
  }
  
  return (
      <>
      <td className="md:w-1/12 md:px-6 md:text-xs md:py-4  "><span className="md:inline-block md:bg-red-500 md:text-white md:px-2 md:py-1 md:rounded-full max-md:bg-red-500 max-md:bg-red-500 max-md:w-7 max-md:h-7 max-md:rounded-full text-[#fda4af] max-md:pl-1 max-md:absolute max-md:top-[5px] max-md:pl-[6px] max-md:text-2xl left-[5px]">{mobile? " X": "Unavailable"}</span></td>
      </>
  )
}

export default StatusComponent
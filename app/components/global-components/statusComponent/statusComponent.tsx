import React from 'react'

interface StatusInterface{
    status: string
}

const StatusComponent:React.FC<StatusInterface> = ({status}) => {
  return (
      <>
        <td className="w-1/5 px-6 text-sm py-4">{status}</td>
      </>
  )
}

export default StatusComponent
import React from 'react'

interface ThInterface{
    title:string
}
const ThComponent:React.FC<ThInterface> = ({title}) => {
  return (
      <th scope="col" className="w-1/5 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</th>
  )
}

export default ThComponent
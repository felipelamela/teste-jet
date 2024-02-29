import React from 'react'
import ThComponent from '../../global-components/thComponent/thComponent'

const listThead = ['Car', 'Next Reservation', 'Rating', 'Status','Action']

const TheadComponent = () => {
  return (
    <thead className="bg-gray-50 max-md:hidden">
      <tr>
          {listThead.map((item,index) => (
          <ThComponent key={index} title={item}/>
          ))}
      </tr>
    </thead>
  )
}

export default TheadComponent
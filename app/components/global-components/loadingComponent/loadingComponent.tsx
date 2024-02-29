import React from 'react'

const LoadingComponent:React.FC = () => {
  return (
      <>
        <tbody>
            <tr>
                <th className="h-screen w-full">
                <div className="flex items-center justify-center h-full">
                    <div className="h-4 w-4 bg-gray-500 rounded-full animate-ping"></div>
                </div>
                </th>
            </tr>
        </tbody>

      </>
  )
}

export default LoadingComponent
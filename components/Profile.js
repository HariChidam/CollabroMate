import React from 'react'
import Image from 'next/image'
import Hari from '../public/Hari.JPG'

export default function Profile({email, Firstname, Lastname, Grade, Class, GPA, Url}) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{Firstname + " " + Lastname}</h1>
      {/* {Url && <Image src={Url} alt='profile pic'> </Image>} */}
      <Image src={Hari} alt='profile pic' width={200} height={200} className="rounded-full mb-4"></Image>
      <h2 className="text-gray-600 text-lg mb-2">{email}</h2>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 text-lg font-medium mr-2">Grade:</span>
        <span className="text-lg font-medium">{Grade}</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 text-lg font-medium mr-2">Class:</span>
        <span className="text-lg font-medium">{Class}</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-600 text-lg font-medium mr-2">GPA:</span>
        <span className="text-lg font-medium">{GPA}</span>
      </div>
    </div>
  )
}

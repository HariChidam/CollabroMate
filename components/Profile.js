import React from 'react'

export default function Profile({email, Firstname, Lastname, Grade, Class, GPA}) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <h2 className="text-lg font-medium mb-2">{Firstname + " " + Lastname}</h2>
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

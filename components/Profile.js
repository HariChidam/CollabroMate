import React from 'react'

export default function Profile({email, Firstname, Lastname, Grade, Class, GPA}) {
  return (
    <div>
        <h1>Profile</h1>
        <h2> {Firstname + " " + Lastname} </h2>
        <h2> {email} </h2>
        <h2> {Grade} </h2>
        <h2> {Class} </h2>
        <h2> {GPA} </h2>
    </div>
  )
}

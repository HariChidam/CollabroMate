/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function signup() {

  const supabase = useSupabaseClient()

  const [email, setEmail] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Grade, setGrade] = useState('');
  const [Class, setClass] = useState('');
  const [GPA, setGPA] = useState('');

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const onLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const onGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const onClassChange = (e) => {
    setClass(e.target.value);
  };

  const onGPAChange = (e) => {
    setGPA(e.target.value);
  };

    const createProfileClick = async () => {
      
      const {error} =  await supabase.from('Profiles').insert(
          {   
          'email': email,
          'Firstname': Firstname, 
          'Lastname': Lastname, 
          'Grade' : Grade,
          'Class' : Class,
          'GPA' : GPA
          });

      if (!error) {
        window.location.href = '/signin';
      }
            // const { error } = await supabase.storage
            // .from("profiles")
            // .upload(
            //   // Just save as `user.id`, not including file extension
            //   // since we may have PNG, JPG, etc
            //   user.id,
            //   avatarFile,
            //   {
            //     contentType: avatarFile.type,
            //     cacheControl: "3600",
            //     upsert: true,
            //   }
            // );
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
       <h1 className="text-3xl font-bold mb-8">Create Profile</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstname">
              Firstname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Firstname"
              value={Firstname}
              onChange={onFirstnameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastname">
              Lastname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Lastname"
              value={Lastname}
              onChange={onLastnameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="grade">
              Grade
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="grade"
              type="text"
              placeholder="Grade"
              value={Grade}
              onChange={onGradeChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="class">
              Class
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="class"
              type="text"
              placeholder="Class"
              value={Class}
              onChange={onClassChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gpa">
              GPA
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gpa"
              type="number"
              placeholder="GPA"
              value={GPA}
              onChange={onGPAChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={createProfileClick}>
              Create Profile
            </button>
          </div>
      </div>
  );
}
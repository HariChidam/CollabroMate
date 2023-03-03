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
    //    let {error} =  await supabase.from('Profiles').insert(
    //     {'email': {email},
    //     'Firstname': {Firstname}, 
    //     'Lastname': {Lastname}, 
    //     'Grade' : {Grade},
    //     'Class' : {Class},
    //     'GPA' : {GPA}
    //     })

        const { data, error } = await supabase.from('Profiles')
        .select('*')
        .eq('email', user.email);
        console.log(data);
    }

  return (
    <div>
      <input type="text" placeholder="email" value={email} onChange={onEmailChange} />
      <input type="text" placeholder="Firstname" value={Firstname} onChange={onFirstnameChange} />
      <input type="text" placeholder="Lastname" value={Lastname} onChange={onLastnameChange} />
      <input type="text" placeholder="Grade" value={Grade} onChange={onGradeChange} />
      <input type="text" placeholder="Class" value={Class} onChange={onClassChange} />
      <input type="number" placeholder="GPA" value={GPA} onChange={onGPAChange} />
      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={createProfileClick}> Create Profile </button>
    </div>
  );
}
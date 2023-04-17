/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect} from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function signup() {

  const supabase = useSupabaseClient()
  const [email, setEmail] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Grade, setGrade] = useState('');
  const [Class, setClass] = useState('');
  const [GPA, setGPA] = useState('');
  const [Bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarImg, setAvatarImg] = useState('');
  const [user, setUser] = useState(null);

 
  useEffect(() => {
      const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
          if(event === 'SIGNED_IN'){
              setUser(session.user);
          }
        });
    }, [supabase.auth]);

  const handleGoogleSignIn = async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/signup',
        }
      });
    };

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

  const onBioChange = (e) => {
    setBio(e.target.value);
  };

  const onFileChange = (event) => {
    // get the selected file
    const selectedFile = event.target.files[0];

    setAvatar(selectedFile);
    // create a FileReader object to read the file
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatarImg(reader.result);
    };
    // read the file as a data URL
    reader.readAsDataURL(selectedFile);
  };

    const createProfileClick = async () => {
      
      const {error: ProfileError} =  await supabase.from('Profiles').insert(
          {   
          'email': email,
          'Firstname': Firstname, 
          'Lastname': Lastname, 
          'Grade' : Grade,
          'Class' : Class,
          'GPA' : GPA,
          'Bio' : Bio,
          });

      const { data: avatarData, error: AvatarError } = await supabase.storage
      .from('profiles')
      .upload(user.id, avatar);

      console.log(avatarData)
      console.log(AvatarError)

      window.location.href = '/signin';
    }

  return (
    <div>
      { !user ? 
      (
        <div className='flex flex-col items-center justify-center py-10'>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3' onClick={handleGoogleSignIn}>Sign in</button>
        </div>
      )
      :
      (
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
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="class">
                  Bio
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="bio"
                  type="text"
                  placeholder="Bio"
                  value={Bio}
                  onChange={onBioChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="image">Upload an image:</label>
                <input 
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type="file" 
                  id="image" 
                  onChange={onFileChange} />
                {avatarImg && <img className='h-20 w-20 object-contain' src={avatarImg} alt="uploaded" />}
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={createProfileClick}>
                  Create Profile
                </button>
              </div>
              <div>
    </div>
        </div>
      )
    } 
    </div>
    
  );
}
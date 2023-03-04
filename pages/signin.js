/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Profile from '../components/FindProfile'

export default function signin() {

    const supabase = useSupabaseClient()
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
              redirectTo: 'http://localhost:3000/signin',
          }
        });
      };
  
      async function handleSignOut() {
          const { error } = await supabase.auth.signOut()

      }

  return (

    <div class="space-y-10">
      <div class= "flex flex-col justify-center items-center text-center">
        <h1 class="text-4xl font-bold">Class Group Finder</h1>
      </div>
      <div class= "flex flex-col justify-center items-center text-center space-y-8">
        <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3' onClick={handleGoogleSignIn}>Sign in</button>
        <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3' onClick={handleSignOut}>Sign Out</button>

        {
            user ? (<Profile user={user} ></Profile> ) : (<div>Not signed in</div>)
        }
      </div>

    </div>
  )
}

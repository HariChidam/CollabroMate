/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

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

      const getProfile = async () => {
                console.log(user.email)
                const { data, error } = await supabase.from('Profiles')
                .select('*')
                .eq('email', user.email);
                console.log(data);
                console.log(error);
        }

  return (
    <div>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        <button onClick={handleSignOut}>Sign Out</button>

        {
            user ? (<button onClick = {getProfile}> get Profile</button> ) : (<div>Not signed in</div>)
        }

    </div>
  )
}

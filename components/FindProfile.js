import React, {useEffect, useState} from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Profile from './Profile';

export default function FindProfile({user}) {

    const supabase = useSupabaseClient()
    const [email, setEmail] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Grade, setGrade] = useState('');
    const [Class, setClass] = useState('');
    const [GPA, setGPA] = useState('');
    const [avatarUrl, setAvatarUrl] = useState(''); 

    useEffect(() => {
        const getProfile = async () => {
            const { data, error } = await supabase.from('Profiles')
            .select('*')
            .eq('email', user.email);

            console.log(data)

            const { data: blob, error: downloadError } = await supabase.storage.from('profiles').download(user.id)

            console.log(blob)

            const url = URL.createObjectURL(blob)
            setAvatarUrl(url)

            console.log(url)
            
            setEmail(data[0].email);
            setFirstname(data[0].Firstname);
            setLastname(data[0].Lastname);
            setGrade(data[0].Grade);
            setClass(data[0].Class);
            setGPA(data[0].GPA);
            console.log(error);
        }
        getProfile();
    },[supabase, user.email, user.id])

  return (
    <div>

        {
          avatarUrl ?

          (
            <Profile email={email} Firstname={Firstname} Lastname={Lastname} Grade={Grade} Class={Class} GPA={GPA} Url={avatarUrl}/>
          )
          :
          (
            <Profile email={email} Firstname={Firstname} Lastname={Lastname} Grade={Grade} Class={Class} GPA={GPA}/>
          )
        }
    </div>
  )
}

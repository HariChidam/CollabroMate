import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Profile from './Profile';
import Link from 'next/link';

export default function FindProfile({ user }) {
  const supabase = useSupabaseClient();
  const [avatarUrl, setAvatarUrl] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const getProfiles = async () => {
      const { data, error } = await supabase.from('Profiles').select('*');
      console.log(data);

      // filter out the current user's profile
      const filteredProfiles = data.filter(profile => profile.email !== user.email);
      const userProfile = data.filter(profile => profile.email === user.email);
      console.log(filteredProfiles);
      console.log(userProfile);

      // set state for all profiles except the current user's profile
      setProfiles(filteredProfiles);
      setUserProfile(userProfile[0] || {});
    };

    getProfiles();
  }, [supabase, user.email]);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        <div class="mx-auto w-2/6">
          <Profile
            key={userProfile.id}
            email={userProfile.email}
            Firstname={userProfile.Firstname}
            Lastname={userProfile.Lastname}
            Grade={userProfile.Grade}
            Class={userProfile.Class}
            GPA={userProfile.GPA}
          />
      </div>
    </div>
      <div>
        <h1 className="text-2xl font-bold my-4">Students</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map(profile => (
            <Profile
              key={profile.id}
              email={profile.email}
              Firstname={profile.Firstname}
              Lastname={profile.Lastname}
              Grade={profile.Grade}
              Class={profile.Class}
              GPA={profile.GPA}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// https://vgtnsiusikeqlnnjzith.supabase.co/storage/v1/object/public/profiles/eee2092e-555c-4fae-bf6e-f974c9e0c9f1
// https://vgtnsiusikeqlnnjzith.supabase.co/storage/v1/object/profiles/eee2092e-555c-4fae-bf6e-f974c9e0c9f1.jepg
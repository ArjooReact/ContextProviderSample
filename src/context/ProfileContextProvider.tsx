import React, {useState} from 'react';
// import UserContext from './UserContext';
// import {AuthUser} from './UserContext';

import ProfileContext from './ProfileContext';
import { ProfileUser } from './ProfileContext';

type ProfileContextProviderProps = {
  children: React.ReactNode;
};
export const ProfileContextProvider = ({children}: ProfileContextProviderProps) => {
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);

  return (
    <ProfileContext.Provider value={{profileUser, setProfileUser}}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileContextProvider;

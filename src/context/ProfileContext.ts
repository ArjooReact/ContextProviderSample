import React, {createContext, ReactNode, useContext, useState} from 'react';

export type ProfileUser = {
  profileName: string;
  profilePassword: string;
};

export type ProfileContextType = {
  profileUser: ProfileUser | null;
  setProfileUser: React.Dispatch<React.SetStateAction<ProfileUser | null>>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export default ProfileContext;

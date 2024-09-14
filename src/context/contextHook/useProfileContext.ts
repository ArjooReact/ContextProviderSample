import React,{useContext} from 'react'
//import UserContext from '../UserContext';
import ProfileContext from '../ProfileContext';

export const useProfileContext = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};
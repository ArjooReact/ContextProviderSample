import React,{useContext} from "react";
import { SafeAreaView,Text } from "react-native";
import { Screen3Props } from "./Screen3Type";

import { useUserContext } from "../../context/contextHook/useUserContext";
import { useProfileContext } from "../../context/contextHook/useProfileContext";
const Screen3:React.FC<Screen3Props>=(props)=>{
  const {profileUser,setProfileUser} = useProfileContext();
  const { user, setUser } = useUserContext();
  return(
    <SafeAreaView>
     <Text>Welcome To Screen3</Text>
     <Text>{user?.name}</Text>
     <Text>{user?.email}</Text>
     <Text>{profileUser?.profileName}</Text>
     <Text>{profileUser?.profilePassword}</Text>
    </SafeAreaView>
  )
}

export default Screen3
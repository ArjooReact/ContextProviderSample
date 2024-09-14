import React,{useContext,useState,useEffect} from "react";
import { Screen2Props } from "./Screen2Type";
import { SafeAreaView,Text,Button } from "react-native";
import UserContext from "../../context/UserContext";
import { useUserContext } from "../../context/contextHook/useUserContext";
import { useProfileContext } from "../../context/contextHook/useProfileContext";
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
const Screen2:React.FC<Screen2Props>=()=>{
  const { user, setUser } = useUserContext();
  const {profileUser,setProfileUser} = useProfileContext();
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [profileuserName,setProfileName]=useState<string>('Arzoo Profile')
    const [profilepassWord,setProfilePassWord]=useState('Arzoo@1237')
    //const userContext = useContext(UserContext);
    useEffect(()=>{
      setProfileUser({profileName:profileuserName,profilePassword:profilepassWord})
    },[])

   
    return(<SafeAreaView>
     <Text>{user?.name}</Text>
     <Button
     title="Go To Screen3"
     onPress={()=>{
       navigation.navigate('Screen3')
     }}
     ></Button>
    </SafeAreaView>)
}

export default Screen2
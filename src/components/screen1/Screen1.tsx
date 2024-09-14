import React,{useState,useContext} from "react";
import { View,Text,Button,TextInput,StyleSheet } from "react-native";
import {Screen1Props} from '../screen1/Screen1Type'
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { useUserContext } from "../../context/contextHook/useUserContext";

const Screen1:React.FC<Screen1Props>=(props)=>{
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [userName,setUserName]=useState<string>('Please Enter UserName')
    const [passWord,setUserPassWord]=useState('Please Enter Password')

    const { user, setUser } = useUserContext();
    const {text}=props
    
    return(<View style={styles.mainContainer}>
     <Text>{user?.name}</Text>
     <Text>{user?.email}</Text>
     <TextInput
      style={styles.userName}
      value={userName}
      onChangeText={setUserName}
     ></TextInput>

    <TextInput
      style={styles.userName}
      value={passWord}
      onChangeText={setUserPassWord}
     ></TextInput>
     <Button
     title="Go To Next Screen"
     onPress={()=>{
        setUser({ name: userName, email: passWord });
      navigation.navigate('Screen2')
     }}
     ></Button>
    </View>)
}

const styles= StyleSheet.create({
    mainContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    },
    userName:{
        width:'90%',
        height:40,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#ffbb00',
        marginTop:20
    }
})
export default Screen1
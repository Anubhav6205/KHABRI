import { View, Text,Image,StyleSheet,Dimensions } from 'react-native'
import React,{useEffect} from 'react'
const {height,width}=Dimensions.get('window')

const LogoPage = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Apis')
            

        },4000)
    },[])
  return (
    <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
    </View>
  )
}


const styles=StyleSheet.create({
    logoContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    logo: {
        width: width * 0.4,   // 40% of the parent container's width
        height: height * 0.1, // 10% of the parent container's height
      },


})


export default LogoPage
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import BlockCard from './BlockCard'
const {width}=Dimensions.get('window')

const SubCard = ({item}) => {
  return   <BlockCard cardStyles={Styles.cardSize} imageStyles={Styles.imageSize} cardDetails={item}/>
  
}

const Styles=StyleSheet.create({
    cardSize:{
        width:width/2,
        height:200,
        marginRight:10


    },
    imageSize:{
        height:120,
        

    }

})

export default SubCard;
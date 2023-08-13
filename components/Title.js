import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Title = ({children,numberOfLines=1}) => {
  return (
    <View>
      <Text numberOfLines={numberOfLines} style={Styles.title}>{children}</Text>
    </View>
  )
}
const Styles=StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight:"bold",

  }

})

export default Title
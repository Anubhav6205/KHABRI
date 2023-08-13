import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Subtitle = ({children,numberOfLines=3}) => {
  return (
    <View>
      <Text numberOfLines={numberOfLines} style={Styles.subTitle}>{children}</Text>
    </View>
  )
}
const Styles=StyleSheet.create({
  subTitle:{
    fontSize:12,
    color:"#b1b1b1",
  }

})
export default Subtitle
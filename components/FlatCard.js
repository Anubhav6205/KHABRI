import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const FlatCard = ({ cardStyles, imageStyles, cardDetails,index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (cardDetails) {

      setIsLoaded(true);
    }
  }, [cardDetails]);

  const navigation =useNavigation();
  const imageSource = cardDetails.urlToImage
  ?  cardDetails.urlToImage
  : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';



  return isLoaded === true ? (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Details',{cardDetails})} key={index}>
    <View style={[Styles.cardContainer, cardStyles]}>
      <Image
        source={{uri:imageSource}}
        style={[Styles.image, imageStyles]}

        
      />

      <View style={Styles.titlesContainer}>
        <Title>{cardDetails.title}</Title>
        <Subtitle>{cardDetails.description}</Subtitle>
      </View>
    </View>
    </TouchableWithoutFeedback>
  ) : (
    <Text>...</Text>
  );
};

const Styles = StyleSheet.create({
  cardContainer: {


    width:"100%",
    marginBottom: 20,
    flexDirection:"row",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    shadowColor:"#585858",
    shadowOpacity:.15,
    elevation:3,
   
    
  },
  image:{
    height: 120,
    width: 120,
    borderRadius: 10,

  },
  

  titlesContainer: {
    padding: 12,
    flex:2,
  }
});
export default FlatCard;

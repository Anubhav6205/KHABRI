import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Dimensions
} from "react-native";
import { NewsContext } from "../context/NewsProvider";
const screenHeight = Dimensions.get("window").height;
const LanguagesPage = ({ navigation }) => {
  const {  setNewsLanguage } = useContext(NewsContext);
  const languages = [
    { name: "English", code: "en" },
    { name: "Hindi", code: "hi" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Italian", code: "it" },
    { name: "Russian", code: "ru" },
    { name: "Chinese", code: "zh" },
    { name: "Japanese", code: "ja" },
    { name: "Arabic", code: "ar" },
    { name: "Korean", code: "ko" }
  ];

  const handleLanguagePress = (item) => {
    setNewsLanguage(item.code);
    navigation.navigate("Topics");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalise Feed</Text>
      <Text style={styles.subTitle}>Select the Language of your feed</Text>
      <Text style={{
            
            textAlign: 'center',
            fontSize:10,
            
           
          }}>Fetching takes time due to API's limitations. Please wait a moment after making any request.</Text>
      
      <View style={styles.languages}>
        {languages.map((item,index) => (
          <TouchableHighlight
            key={index}
            underlayColor={"transparent"}
            onPress={() => handleLanguagePress(item)}
            style={styles.touchableHighlight}
          >
            <Text style={styles.languageText}>{item.name}</Text>
          </TouchableHighlight>
        ))}
      </View>
   
      
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  languages: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: screenHeight / 5 // Use screenHeight here
  },
  container: {
    padding: 15,
    alignItems: "center"
  },
  subTitle: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: "Roboto", // Use your preferred font family
    color: "#777"
  },
  touchableHighlight: {
    padding: 12,
    margin: 20,
    borderColor: "#ccc",
    borderWidth: 1.5,
    borderRadius: 10
  },
  languageText: {
    fontSize: 20,
    color: "#333"
  }
});

export default LanguagesPage;

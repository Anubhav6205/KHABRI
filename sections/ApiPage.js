import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../context/NewsProvider";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const screenHeight = Dimensions.get("window").height;

const ApiPage = () => {
  const navigation = useNavigation();
  const handleApiClick = (index) => {
    setApiIndex(index);
    navigation.navigate("Languages");
  };
  const { setApiIndex } = useContext(NewsContext);
  const indexes = [0, 1, 2, 3,4];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalise Feed</Text>
      <Text style={styles.subTitle}>Select any API</Text>
      <View style={styles.apis}>
        {indexes.map((index) => (
          <TouchableHighlight
            style={styles.touchableHighlight}
            onPress={() => handleApiClick(index)}
            underlayColor={"transparent"}
            key={index}
          >
            <Text>{index}</Text>
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
  apis: {
 
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flex:1,

    // Use screenHeight here
  },
  container: {
    padding: 15,
    alignItems: "center",

    flex:1,
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
export default ApiPage;

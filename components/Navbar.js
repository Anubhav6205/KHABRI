import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableHighlight
} from "react-native";
import { useContext } from "react";
import { NewsContext } from "../context/NewsProvider";

export const Navbar = () => {
  const {news}=useContext(NewsContext);
  const [showInput, setShowInput] = useState(false);
  return (
    <View>
      <StatusBar />
      
      <View style={Styles.navbarContainer}>
        {showInput && <TextInput placeholder="Search" style={Styles.input} />}
        

        <TouchableHighlight
          onPress={() => setShowInput((prev) => !prev)}
   
          underlayColor="transparent"
        >
          <Text        style={Styles.searchIcon}>🔍</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"flex-end",
    padding: 10,
    height: 60,
  },
  searchIcon: {
    fontSize: 20,

  
   

  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 15
  }
});

import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { NewsContext } from "../context/NewsProvider";
import FlatCard from "../components/FlatCard";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const SearchPage = () => {
  const { searchedTopic, setSearchedTopic, searchNews } =
    useContext(NewsContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search a topic"
          placeholderTextColor="#aaa"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableHighlight
          onPress={() => setSearchedTopic(inputValue)}
          underlayColor="transparent"
        >
          <Ionicons name="search" size={20} color="black" style={styles.icon} />
        </TouchableHighlight>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {searchedTopic.length > 0 ? (
          searchNews.map((newsItem, index) => (
            <FlatCard key={newsItem.url} cardDetails={newsItem} index />
          ))
        ) : (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                flex: 4,
                textAlign: "center",
                textAlignVertical: "center",
                fontSize: 18
              }}
            >
              "Does MC Stan's shoes actually cost 80k👟?!" Search anything. Its
              Free.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  },
  inputContainer: {
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 16
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flex: 3
  },
  icon: {
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10
  },
  scrollContainer: {
    padding: 16,
    flexGrow: 1
  }
});

export default SearchPage;

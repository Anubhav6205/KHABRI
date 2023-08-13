import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import { NewsContext } from "../context/NewsProvider";

const screenHeight = Dimensions.get("window").height;

const TopicsPage = ({ navigation }) => {
  const { setUserTopics, userTopics } = useContext(NewsContext);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const topics = [
    { name: "Business", code: "business" },
    { name: "Entertainment", code: "entertainment" },
    { name: "Politics", code: "politics" },
    { name: "Health", code: "health" },
    { name: "Science", code: "science" },
    { name: "Sports", code: "sports" },
    { name: "Technology", code: "technology" }
  ];

  const handleTopicPress = (item) => {
    const newSelectedTopics = selectedTopics.includes(item.code)
      ? selectedTopics.filter((topic) => topic !== item.code)
      : [...selectedTopics, item.code];

    setSelectedTopics(newSelectedTopics);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalise Feed</Text>
      <Text style={styles.subTitle}>
        Select a minimum of 3 topics to explore further News coverage.
      </Text>
      <Text style={{
            
            textAlign: 'center',
            fontSize:10,
            
           
          }}>Fetching takes time due to API's limitations. Please wait a moment after making any request.</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {topics.map((topic, index) => (
          <TouchableHighlight
            key={index}
            style={[
              styles.topicButton,
              selectedTopics.includes(topic.code) && styles.selectedTopic
            ]}
            onPress={() => handleTopicPress(topic)}
            underlayColor="transparent"
          >
            <Text style={styles.topicButtonText}>{topic.name}</Text>
          </TouchableHighlight>
        ))}
      </ScrollView>
      <TouchableHighlight
        style={styles.nextButton}
        onPress={() => {
          setUserTopics(selectedTopics);
          navigation.navigate("Main");
        }}
        underlayColor="#0057a8"
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitle: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: "Roboto", // Use your preferred font family
    color: "#777",
    textAlign: "center"
  },
  scrollContainer: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: screenHeight / 6,

    justifyContent: "center"
  },
  topicButton: {
    padding: 12,
    margin: 20,
    borderColor: "#ccc",
    borderWidth: 1.5,
    borderRadius: 10
  },
  selectedTopic: {
    borderColor:"#6c03f5",
  
  },
  topicButtonText: {
    fontSize: 20,

    color: "#333"
  },
  nextButton: {
    backgroundColor: "purple",
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
    margin: 16, // Add margin for better spacing
    alignItems: "center"
  },
  nextButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold"
  }
});

export default TopicsPage;

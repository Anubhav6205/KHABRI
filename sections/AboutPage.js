import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Hi there! I'm
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize:22
          }}
        >
          {" "}
          Anubhav Gupta
        </Text>
        , a passionate developer and creator from KIIT University. I enjoy building mobile apps that
        make people's lives easier and more enjoyable.🧑‍💻
      </Text>
      <Text style={styles.contact}>
        Contact:{" "}
        <Text
          style={{
            fontWeight: "bold",
            color: "black"
          }}
        >
          anubhavgupta6205@gmail.com
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 16
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8
  },
  description: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 16
  },
  contact: {
    fontSize: 16,
    color: "#888"
  }
});

export default AboutPage;

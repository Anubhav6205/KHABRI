import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import SubCard from "./SubCard";

const HorizontalList = ({ data, Title }) => {
  return (
    <View>
      <Text style={Styles.listTitle}>{Title}</Text>
      <FlatList
        style={Styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => <SubCard item={item} />}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8
  },
  list: {}
});

export default HorizontalList;

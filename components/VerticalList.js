import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import FlatCard from "./FlatCard";

const VerticalList = ({ data, title }) => {
  return (
    <View>
      <FlatList
        style={Styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FlatCard cardDetails={item} />}
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

export default VerticalList;

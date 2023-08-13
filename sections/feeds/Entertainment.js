import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../../context/NewsProvider";
import BlockCard from "../../components/BlockCard";

const Entertainment = () => {
  const { newsByFeed } = useContext(NewsContext);
  const {entertainment}=newsByFeed;



  return (
    <ScrollView style={Styles.headlinesContainer}>
      {entertainment.slice(0,100).map((singleNews, index) => {
        return (
          <View  key={index}>
            <BlockCard
             
              cardDetails={singleNews}
              cardStyles={Styles.blockCardStyles}
            />
            
          </View>
        );
      })}
    </ScrollView>

  );
};

const Styles = StyleSheet.create({
  headlinesContainer: {
    padding: 10
  },
  blockCardStyles: {
    marginBottom: 30
  }
});

export default Entertainment;

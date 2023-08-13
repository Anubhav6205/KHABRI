import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Headlines from "./feeds/Headlines";
import Politics from "./feeds/Politics";
import Sports from "./feeds/Sports";
import Entertainment from "./feeds/Entertainment";
import Health from "./feeds/Health";
import Business from "./feeds/Business";
import Science from "./feeds/Science";
import 'react-native-gesture-handler';
import { NewsContext } from "../context/NewsProvider";
const HomePage = () => {
  const Tab = createMaterialTopTabNavigator();
  const { setUserTopics, setTabChange, tabChange } = useContext(NewsContext);
  const [currentTab, setCurrentTab] = useState("headlines");

  return (
   <Tab.Navigator
  screenOptions={{
    tabBarScrollEnabled: true,
    tabBarStyle: { backgroundColor: "#fff" }, // Change background color for the tab bar
    tabBarIndicatorStyle: { backgroundColor: "#4400ff" }, // Change indicator (bottom line) color
    tabBarLabelStyle: { fontSize: 10 },
    tabBarTabStyle: { width: 120, height: 50 },
  }}
>
      <Tab.Screen name="Headlines" component={Headlines} />
      <Tab.Screen name="Sports" component={Sports} />
      <Tab.Screen name="Tech" component={Science} />
      <Tab.Screen name="Entertainment" component={Entertainment} />
      <Tab.Screen name="Politics" component={Politics} />

      <Tab.Screen name="Business" component={Business} />

      <Tab.Screen name="Health" component={Health} />
    </Tab.Navigator>
  );
};
const Styles = StyleSheet.create({
  mainContainer: {
    padding: 10
  }
});

export default HomePage;

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { Ionicons } from "@expo/vector-icons";
import AboutPage from "./AboutPage";
import 'react-native-gesture-handler';


const MainPage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "purple",      // Change active tab label color
        tabBarInactiveTintColor: "grey",     // Change inactive tab label color
        tabBarStyle: { backgroundColor: "white" },  // Change background color for the tab bar
        tabBarLabelStyle: { fontSize: 10 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "About") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        }
      })}
     
  
      
    >
      <Tab.Screen name="Home" component={HomePage}      options={{ headerShown: false }}/>
      <Tab.Screen name="Search" component={SearchPage}     options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutPage}     options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default MainPage;

import { View, Text, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LanguagesPage from "./sections/LanguagesPage";
import MainPage from "./sections/MainPage";
import NewsProvider from "./context/NewsProvider";
import TopicsPage from "./sections/TopicsPage";
import DetailsPage from "./sections/DetailsPage";
import LogoPage from "./sections/LogoPage";
import ApiPage from "./sections/ApiPage";
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NewsProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen
            name="Logo"
            component={LogoPage}
            options={{
              headerShown: false,
              gestureEnabled: false
            }}
          />
          <Stack.Screen
            name="Apis"
            component={ApiPage}
            options={{
              headerShown: false,
              gestureEnabled: false }}/>
          <Stack.Screen
            name="Languages"
            component={LanguagesPage}
            options={{
              headerShown: false,
              gestureEnabled: false
            }}
          />
          <Stack.Screen
            name="Topics"
            component={TopicsPage}
            options={{
              headerShown: false,
              gestureEnabled: false
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen name="Details" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
};

export default App;

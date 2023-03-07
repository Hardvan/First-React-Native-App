/*
  ? To initialize:
  1) npx create-expo-app --DoneWithIt

  ? To run:
  1) cd DoneWithIt
  2) npx expo start
  3) Press 'a' to run on Android emulator
  4) Press 'w' to run on web browser

  ? Open android virtual device (AVD):
  1) Open Android Studio
  2) Open AVD Manager
  3) Start AVD
  
  ? To open developer menu on an Android emulator:
  1) Press ctrl + m on emulator. On mobile, shake device.

  ? To publish:
  1) expo publish

  ? Project Link:
  https://expo.dev/@hardvan/DoneWithIt?serviceType=classic&distribution=expo-go

  ? Re-run in terminal if it says file not found
*/

import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewImage"
          component={ViewImageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
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
*/

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("Console log message, this is.");

  return (
    <View style={styles.container}>
      <Text>Hello, World! This is React Native.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

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
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container} noOfLines={1} onPress={handlePress}>
      {/* Status bar is the bar at the top of the screen */}
      <StatusBar style="auto" />

      <Text>Hello, World! This is React Native. This is a very ling text.</Text>
      {/* Static Image */}
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 200, height: 200 }}
      />
      {/* Image from the web */}
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        }}
        fadeDuration={1000}
      />
    </SafeAreaView>
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

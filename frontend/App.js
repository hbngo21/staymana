import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color, initializeFonts, TextStyle } from "./src/helper";
import { AppName } from "./src/components";

export default function App() {
  initializeFonts();

  return (
    <View style={styles.container}>
      <AppName fontSize={54} lineHeight={60} />
      <Text style={TextStyle.h2}>
        Open up App.js to start working on your app!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white_100,
    alignItems: "center",
    justifyContent: "center",
  },
});

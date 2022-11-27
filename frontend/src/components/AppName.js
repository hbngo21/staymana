import React from "react";
import { Text } from "react-native";
import { Audiowide_400Regular, useFonts } from "@expo-google-fonts/audiowide";

export const AppName = (props) => {
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Text
        style={{
          fontSize: props.fontSize,
          lineHeight: props.lineHeight,
          fontFamily: "Audiowide_400Regular",
        }}
      >
        StayMana
      </Text>
    );
  }
};

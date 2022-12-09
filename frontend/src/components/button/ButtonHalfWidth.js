import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { ButtonType, Color, ScreenSize, TextStyle } from "../../utils";

export const ButtonHalfWidth = (props) => {
  const { type, content, onPress } = props;
  const buttonColor =
    type == ButtonType.OUTLINE
      ? Color.white_100
      : type == ButtonType.RED
      ? Color.red_100
      : Color.primary_100;
  const textColor =
    type == ButtonType.OUTLINE ? Color.primary_100 : Color.white_100;
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: buttonColor,
        borderColor: textColor,
      }}
      onPress={onPress}
    >
      <Text style={{ ...TextStyle.h3, color: textColor }}>{content}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,
    width: (150 / 375) * ScreenSize.width,
    paddingVertical: (13 / 812) * ScreenSize.height,
    borderWidth: 1,
  },
});

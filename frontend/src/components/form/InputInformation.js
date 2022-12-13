import * as React from "react";
import { TextInput } from "react-native-paper";
import { Text } from "react-native";
import { Color, TextStyle, ScreenSize } from "../../utils";

export const InputInformation = (props) => {
  const { title, information, rightIcon, onPress } = props;
  return (
    <TextInput
      label={
        <Text style={{ ...TextStyle.h3, color: Color.dark_100 }}>{title}</Text>
      }
      mode="flat"
      value={information}
      activeUnderlineColor={Color.white_100}
      underlineColor={Color.white_100}
      outlineColor={Color.white_100}
      activeOutlineColor={Color.white_100}
      editable={false}
      style={{
        ...TextStyle.h3,
        width: (327 / 375) * ScreenSize.width,
        backgroundColor: Color.white_100,
      }}
    />
  );
};

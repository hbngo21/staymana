import * as React from "react";
import { TextInput } from "react-native-paper";
import { Color, TextStyle, ScreenSize, initializeFonts } from "../../utils";

export const InputText = (props) => {
  const [text, setText] = React.useState("");
  return (
    <TextInput
      label={props.title}
      placeholder={props.placeholder}
      placeholderTextColor={Color.grey_100}
      mode="flat"
      value={text}
      outlineColor={Color.white_100}
      activeOutlineColor={Color.white_100}
      onChangeText={(text) => setText(text)}
      style={{
        ...TextStyle.bodyLarge,
        ...TextStyle.h3,
        fontWeight: "400",
        width: (327 / 375) * ScreenSize.width,
        backgroundColor: Color.white_100,
      }}
    />
  );
};

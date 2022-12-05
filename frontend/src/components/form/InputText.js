import * as React from "react";
import { TextInput } from "react-native-paper";
import { Color, initializeFonts, TextStyle } from "../../utils";
import { ScreenSize } from "../../utils";

export const InputText = (props) => {
  const [text, setText] = React.useState("");
  initializeFonts();
  return (
    <TextInput
      label={props.title}
      placeholder={props.placeholder}
      placeholderTextColor={Color.grey_100}
      mode="outlined"
      value={text}
      outlineColor={Color.primary_100}
      activeOutlineColor={Color.primary_100}
      onChangeText={(text) => setText(text)}
      style={{
        ...TextStyle.bodyLarge,
        width: (327 / 375) * ScreenSize.width,
        backgroundColor: Color.white_100,
      }}
    />
  );
};

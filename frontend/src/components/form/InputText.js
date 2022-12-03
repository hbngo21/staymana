import * as React from "react";
import { Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import { Color, initializeFonts, TextStyle } from "../../utils";

const width = Dimensions.get("window").width;

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
        width: (327 / 375) * width,
        backgroundColor: Color.white_100,
      }}
    />
  );
};

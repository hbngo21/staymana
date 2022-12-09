import * as React from "react";
import { TextInput } from "react-native-paper";
import { Color, TextStyle, ScreenSize } from "../../utils";

export const InputInformation = (props) => {
  const { title, information } = props;
  return (
    <TextInput
      label={title}
      mode="outlined"
      value={information}
      outlineColor={Color.white_100}
      editable={false}
      style={{
        ...TextStyle.h3,
        width: (327 / 375) * ScreenSize.width,
        backgroundColor: Color.white_100,
      }}
    />
  );
};

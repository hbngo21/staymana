import { Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { Color, ScreenSize, TextStyle } from "../utils";

export const WelcomeText = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: (16 / 812) * ScreenSize.height,
        }}
      >
        <Text style={TextStyle.h3}>Xin chào, </Text>
        <Text style={{ ...TextStyle.h3, color: Color.red_100 }}>
          {props.name} 👋{" "}
        </Text>
      </View>
      <Divider style={{ color: Color.grey_100 }} />
    </View>
  );
};

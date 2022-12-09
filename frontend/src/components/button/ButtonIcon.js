import { StyleSheet, Pressable } from "react-native";
import { ButtonType, Color, ScreenSize } from "../../utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ButtonIcon = (props) => {
  const { type, iconName, onPress } = props;
  const buttonColor =
    type == ButtonType.OUTLINE
      ? Color.white_100
      : type == ButtonType.DISABLE
      ? Color.grey_20
      : Color.primary_100;
  const iconColor =
    type == ButtonType.OUTLINE ? Color.primary_100 : Color.white_100;
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: buttonColor,
        borderWidth: 1,
        borderColor:
          type == ButtonType.OUTLINE ? Color.primary_100 : buttonColor,
      }}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={(18.95 / 375) * ScreenSize.width}
        color={iconColor}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: (44 / 375) * ScreenSize.width,
    width: (40 / 375) * ScreenSize.width,
    height: (40 / 375) * ScreenSize.width,
    padding: (11 / 812) * ScreenSize.height,
  },
});

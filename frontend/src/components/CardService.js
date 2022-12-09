import { ScreenSize, TextStyle } from "../utils";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const CardService = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(props.data.navigate)}>
      <View style={styles.container}>
        <Avatar.Image
          size={(80 / 375) * ScreenSize.width}
          source={props.data.image}
          style={styles.image}
        />
        <Text style={{ ...TextStyle.h3, ...styles.text }}>
          {props.data.name}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: (135 / 375) * ScreenSize.width,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    alignSelf: "center",
    marginTop: ScreenSize.width * 0.05,
    overflow: "hidden",
  },
  text: {
    width: "100%",
    textAlign: "center",
    marginTop: 11,
    marginBottom: 14,
  },
});

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function SignUp1({ navigation }) {
  return (
    <View style={styles.center}>
      <Button title="Chủ trọ" onPress={() => navigation.navigate("SignUp2")} />
      <Button
        title="Khách trọ"
        onPress={() => navigation.navigate("SignUp2")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

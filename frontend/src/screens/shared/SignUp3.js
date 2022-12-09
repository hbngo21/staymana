import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function SignUp3({ navigation }) {
  return (
    <View style={styles.center}>
      <Button
        title="Tiếp theo"
        onPress={() => navigation.navigate("SignUp4")}
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

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function SignUp2({ navigation }) {
  return (
    <View style={styles.center}>
      <Button
        title="Tiếp theo"
        onPress={() => navigation.navigate("SignUp3")}
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

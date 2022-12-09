import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function SignUp4({ navigation }) {
  return (
    <View style={styles.center}>
      <Button
        title="Hoàn thành"
        onPress={() => navigation.navigate("SignUp5")}
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

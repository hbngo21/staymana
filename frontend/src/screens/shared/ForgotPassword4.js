import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function ForgotPassword4({ navigation }) {
  return (
    <View style={styles.center}>
      <Button
        title="Đăng nhập"
        onPress={() => navigation.goBack(navigation.popToTop())}
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

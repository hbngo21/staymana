import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function CreateBill({ navigation }) {
  return (
    <View style={styles.center}>
      <Button title="Tạo" onPress={() => navigation.goBack()} />
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

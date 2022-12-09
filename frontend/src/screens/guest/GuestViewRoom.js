import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function GuestViewRoom({ route, navigation }) {
  return (
    <View style={styles.center}>
      <Button
        title={"Hóa đơn tháng 9"}
        onPress={() => navigation.navigate("GuestViewBill")}
      />
      <Button
        title={"Hóa đơn tháng 10"}
        onPress={() => navigation.navigate("GuestViewBill")}
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

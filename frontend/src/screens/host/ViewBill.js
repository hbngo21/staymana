import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function ViewBill({ route, navigation }) {
  const { fromHouse } = route.params;
  if (fromHouse)
    return (
      <View style={styles.center}>
        <Button
          title="Thêm hóa đơn"
          onPress={() => navigation.navigate("CreateBill")}
        />
      </View>
    );
  // Else
  return <View style={styles.center}></View>;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

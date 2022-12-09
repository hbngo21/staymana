import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function ViewRoom({ route, navigation }) {
  // fake data
  const guest1 = "Hoàng Vũ";
  const guest2 = "Tuấn Minh";
  const { name } = route.params;
  return (
    <View style={styles.center}>
      <Button
        title={guest1}
        onPress={() => navigation.navigate("ViewGuest", { name: guest1 })}
      />
      <Button
        title={guest2}
        onPress={() => navigation.navigate("ViewGuest", { name: guest2 })}
      />
      <Button
        title={"Xem hóa đơn"}
        onPress={() =>
          navigation.navigate("ViewBill", { name: name, fromHouse: false })
        }
      />
      <Button
        title={"Thêm người"}
        onPress={() => navigation.navigate("AddGuest")}
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

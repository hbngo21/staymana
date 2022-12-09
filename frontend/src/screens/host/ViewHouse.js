import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function ViewHouse({ route, navigation }) {
  // fake data
  const room1 = "Phòng 101";
  const room2 = "Phòng 102";
  const { name } = route.params;
  return (
    <View style={styles.center}>
      <Button
        title={room1}
        onPress={() => navigation.navigate("ViewRoom", { name: room1 })}
      />
      <Button
        title={room2}
        onPress={() => navigation.navigate("ViewRoom", { name: room2 })}
      />
      <Button
        title={"Xem hóa đơn"}
        onPress={() =>
          navigation.navigate("ViewBill", { name: name, fromHouse: true })
        }
      />
      <Button
        title={"Thêm phòng"}
        onPress={() => navigation.navigate("CreateRoom")}
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

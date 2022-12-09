import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function GuestList({ navigation }) {
  // fake data
  const room1 = "Phòng 101";
  const room2 = "Phòng 102";

  return (
    <View style={styles.center}>
      <Button
        title={room1}
        onPress={() => navigation.navigate("GuestViewRoom", { name: room1 })}
      />
      <Button
        title={room2}
        onPress={() => navigation.navigate("GuestViewRoom", { name: room2 })}
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

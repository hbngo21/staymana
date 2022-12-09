import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function GuestProfile({ navigation }) {
  return (
    <View style={styles.center}>
      <Text>Trang cá nhân</Text>
      <Button
        title="Thông tin cá nhân"
        onPress={() => navigation.navigate("GuestInfo")}
      />
      <Button
        title="Đăng xuất"
        onPress={() => navigation.navigate("GuestProfile")}
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

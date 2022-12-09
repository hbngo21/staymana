import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { ScreenSize } from "../../utils";

export function HostProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trang cá nhân</Text>
      </View>
      <View style={styles.center}>
        <Text>Trang cá nhân</Text>
        <Button
          title="Thông tin cá nhân"
          onPress={() => navigation.navigate("HostInfo")}
        />
        <Button
          title="Đăng xuất"
          onPress={() => navigation.navigate("HostProfile")}
        />
      </View>
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
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    height: ScreenSize.height * 0.156,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: ScreenSize.height * 0.05,
  },
  headerText: {
    fontSize: ScreenSize.width * 0.06,
    fontWeight: "600",
    color: "black",
    alignSelf: "center",
  },
});

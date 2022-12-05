import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function HostHome({ navigation}) {
    return (
      <View style={styles.center}>

      <Text>Trang chính</Text>
      <Button
        title="Tạo nhà trọ"
        onPress={() => navigation.navigate("CreateHouse")}
      />
      <Button
        title="Tạo phòng trọ"
        onPress={() => navigation.navigate("CreateRoom")}
      />
      <Button
        title="Thêm người"
        onPress={() => navigation.navigate("AddGuest")}
      />
      <Button
        title="Tạo hóa đơn"
        onPress={() => navigation.navigate("CreateBill")}
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

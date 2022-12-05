import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function CreateRoom({route, navigation}) {
    // fromHouse là boolean để check nếu true thì là tạo room từ nhà trọ -> xử lý riêng
    const {fromHouse} = route.params;
    return (
        <View style={styles.center}>
        
        <Text>Tạo phòng trọ</Text>
        <Button
          title="Tạo"
          onPress={() => navigation.goBack()}
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
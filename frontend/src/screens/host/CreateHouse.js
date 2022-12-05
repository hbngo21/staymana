import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function CreateHouse({navigation}) {
    return (
        <View style={styles.center}>

        <Text>Tạo nhà trọ</Text>
        <Button
          title="Thêm phòng"
          onPress={() => navigation.navigate("CreateRoom", {fromHouse: true})}
        />
        <Button
          title="Tạo"
          onPress={() => navigation.popToTop()}
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
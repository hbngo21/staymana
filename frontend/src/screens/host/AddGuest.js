import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function AddGuest({navigation}) {
    return (
        <View style={styles.center}>
        <Button
          title="Quét QR"
          onPress={() => navigation.navigate("GuestDetail")}
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
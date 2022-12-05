import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function GuestDetail({navigation}) {
    return (
        <View style={styles.center}>
        <Button
          title="Xác nhận"
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

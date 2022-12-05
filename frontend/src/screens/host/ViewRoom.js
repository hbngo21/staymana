import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function ViewRoom({ navigation}) {
    // fake data
    const guest1 = 'Hoàng Vũ'
    const guest2 = 'Tuấn Minh'

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

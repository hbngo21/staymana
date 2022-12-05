import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function HostList({ navigation}) {
    // fake data
    const house1 = 'Nhà trọ Hoa Mai'
    const house2 = 'Nhà trọ Hoa Đào'

    return (
      <View style={styles.center}>

      <Button
        title={house1}
        onPress={() => navigation.navigate("ViewHouse", { name: house1 })}
      />
      <Button
        title={house2}
        onPress={() => navigation.navigate("ViewHouse", { name: house2 })}
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

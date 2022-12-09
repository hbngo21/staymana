import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenSize } from "../utils";

import { GuestList, GuestViewRoom, GuestViewBill } from "../screens";

const Stack = createStackNavigator();

const backButtonImg = () => {
  return (
    <Image
      source={require("../images/backButton.png")}
      style={{
        height: ScreenSize.width * 0.1,
        width: ScreenSize.width * 0.1,
        marginLeft: ScreenSize.width * 0.06,
      }}
    />
  );
};

const HeaderStyle = {
  headerBackImage: backButtonImg,
  headerStyle: {
    backgroundColor: "white",
    height: ScreenSize.height * 0.156,
  },
  headerTitleStyle: { fontSize: ScreenSize.width * 0.06 },
  headerTintColor: "black",
  headerBackTitleVisible: false,
};

export const GuestViewStack = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle} initialRouteName="GuestList">
      <Stack.Screen
        name="GuestList"
        component={GuestList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GuestViewRoom"
        component={GuestViewRoom}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="GuestViewBill"
        component={GuestViewBill}
        options={{ title: "Hóa đơn" }}
      />
    </Stack.Navigator>
  );
};

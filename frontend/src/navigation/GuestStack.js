import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ScreenSize } from "../utils";

import { GuestInfo } from "../screens";
import { GuestNavBar } from "./GuestNavBar";

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

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "";

  switch (routeName) {
    case "GuestProfile":
      return "Trang cá nhân";
    case "GuestChat":
      return "Tin nhắn";
    case "GuestHistory":
      return "Lịch sử";
  }
}

function renderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (routeName == "GuestHome") return false;
  return true;
}

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

export const GuestStack = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle} initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={GuestNavBar}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerShown: renderTitle(route),
        })}
      />

      <Stack.Screen
        name="GuestInfo"
        component={GuestInfo}
        options={{ title: "Thông tin cá nhân" }}
      />
    </Stack.Navigator>
  );
};

import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ScreenSize } from "../utils";

import {
  CreateHouse,
  CreateRoom,
  CreateBill,
  AddGuest,
  GuestDetail,
  HostNotification,
} from "../screens";
import { HostInfo } from "../screens";
import { HostNavBar } from "./HostNavBar";

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
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "HostProfile":
      return "Trang cá nhân";
    case "HostChat":
      return "Tin nhắn";
  }
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

export const HostStack = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle} initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={HostNavBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateHouse"
        component={CreateHouse}
        options={{ title: "Tạo nhà trọ" }}
      />
      <Stack.Screen
        name="CreateRoom"
        component={CreateRoom}
        options={{ title: "Tạo phòng trọ" }}
        initialParams={{ fromHouse: false }}
      />
      <Stack.Screen
        name="CreateBill"
        component={CreateBill}
        options={{ title: "Tạo hóa đơn" }}
      />
      <Stack.Screen
        name="AddGuest"
        component={AddGuest}
        options={{ title: "Quét mã QR" }}
      />
      <Stack.Screen
        name="GuestDetail"
        component={GuestDetail}
        options={{ title: "Thêm người" }}
      />
      <Stack.Screen
        name="HostNotification"
        component={HostNotification}
        options={{ title: "Thông báo" }}
      />

      <Stack.Screen
        name="HostInfo"
        component={HostInfo}
        options={{ title: "Thông tin cá nhân" }}
      />
    </Stack.Navigator>
  );
};

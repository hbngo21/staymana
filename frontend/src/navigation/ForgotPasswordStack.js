import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenSize } from "../utils";

import {
  ForgotPassword1,
  ForgotPassword2,
  ForgotPassword3,
  ForgotPassword4,
} from "../screens";

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
  title: "Quên mật khẩu",
};

export const ForgotPasswordStack = () => {
  return (
    <Stack.Navigator
      screenOptions={HeaderStyle}
      initialRouteName="ForgotPassword1"
    >
      <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
      <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
      <Stack.Screen name="ForgotPassword3" component={ForgotPassword3} />
      <Stack.Screen
        name="ForgotPassword4"
        component={ForgotPassword4}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

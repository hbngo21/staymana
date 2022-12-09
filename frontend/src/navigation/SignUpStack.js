import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenSize } from "../utils";

import { SignUp1, SignUp2, SignUp3, SignUp4, SignUp5 } from "../screens";

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
  title: "Đăng ký",
};

export const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle} initialRouteName="SignUp1">
      <Stack.Screen name="SignUp1" component={SignUp1} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="SignUp3" component={SignUp3} />
      <Stack.Screen name="SignUp4" component={SignUp4} />
      <Stack.Screen
        name="SignUp5"
        component={SignUp5}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScreenSize } from "../utils";

import { HostChat, HostProfile, HostHome } from "../screens";
import { HostViewStack } from "./HostViewStack";

const size = ScreenSize.width * 0.1;
const selectedLabel = "_____";
const styles = {
  paddingRight: ScreenSize.width * 0.1,
  marginTop: -ScreenSize.height * 0.015,
};

const Tab = createMaterialBottomTabNavigator();

export const HostNavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HostHome"
      activeColor="#049FFF"
      inactiveColor="#979797"
      screenOptions={{ tabBarLabel: selectedLabel }}
      barStyle={{
        backgroundColor: "white",
        height: ScreenSize.height * 0.15,
        paddingVertical: ScreenSize.height * 0.04,
      }}
    >
      <Tab.Screen
        name="HostHome"
        component={HostHome}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
              style={styles}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HostViewStack"
        component={HostViewStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
              style={styles}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HostChat"
        component={HostChat}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="email-outline"
              color={color}
              size={size}
              style={styles}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HostProfile"
        component={HostProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
              style={styles}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

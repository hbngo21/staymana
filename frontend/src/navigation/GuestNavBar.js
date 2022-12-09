import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScreenSize } from "../utils";

import { GuestChat, GuestHistory, GuestProfile } from "../screens";
import { GuestViewStack } from "./GuestViewStack";

const size = ScreenSize.width * 0.1;
const selectedLabel = "_____";
const styles = {
  paddingRight: ScreenSize.width * 0.1,
  marginTop: -ScreenSize.height * 0.015,
};

const Tab = createMaterialBottomTabNavigator();

export const GuestNavBar = () => {
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
        name="GuestHome"
        component={GuestViewStack}
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
        name="GuestChat"
        component={GuestChat}
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
        name="GuestHistory"
        component={GuestHistory}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="history"
              color={color}
              size={size}
              style={styles}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GuestProfile"
        component={GuestProfile}
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

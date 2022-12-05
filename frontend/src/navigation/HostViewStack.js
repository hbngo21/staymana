import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenSize } from '../utils';

import { HostList, ViewGuest, ViewHouse, ViewRoom } from "../screens"

const Stack = createStackNavigator();

const backButtonImg = () => {
  return (
    <Image 
      source={require('../images/backButton.png')}
      style={{
        height: ScreenSize.width * 0.1,
        width: ScreenSize.width * 0.1,
        marginLeft: ScreenSize.width * 0.06,
      }}
    />
  )
}

const HeaderStyle = {
    headerBackImage: backButtonImg,
        headerStyle: {
          backgroundColor: "white",
          height: ScreenSize.height * 0.156
        },
        headerTitleStyle: {fontSize: ScreenSize.width * 0.06},
        headerTintColor: "black",
        headerBackTitleVisible: false
}

export const HostViewStack = () => {
  return (
    <Stack.Navigator
    screenOptions={HeaderStyle}
    initialRouteName="HostList"
  >
    <Stack.Screen name="HostList" component={HostList} options={{ title: 'Nhà trọ của bạn' }}/>
    <Stack.Screen name="ViewHouse" component={ViewHouse} options={({ route }) => ({ title: route.params.name })}/>
    <Stack.Screen name="ViewRoom" component={ViewRoom} options={({ route }) => ({ title: route.params.name })}/>
    <Stack.Screen name="ViewGuest" component={ViewGuest} options={({ route }) => ({ title: route.params.name })}/>
  </Stack.Navigator>
  );
};
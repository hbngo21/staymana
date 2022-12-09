// Screen
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { ScreenSize } from "../utils";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HostStack,
  GuestStack,
  SignUpStack,
  ForgotPasswordStack,
} from "../navigation";

const AuthContext = React.createContext();

export function LoginHandler() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            hostRole: action.hostRole,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
      hostRole: false,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({
          type: "SIGN_IN",
          token: "dummy-auth-token",
          hostRole: data.hostRole,
        });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

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

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={HeaderStyle}>
          {state.userToken == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginRole"
                component={LoginRole}
                options={{ title: "Đăng nhập" }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordStack}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpStack}
                options={{ headerShown: false }}
              />
            </>
          ) : state.hostRole ? (
            <Stack.Screen
              name="HostStack"
              component={HostStack}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="GuestStack"
              component={GuestStack}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  const [username, setUsername] = React.useState("username");
  const [password, setPassword] = React.useState("password");

  return (
    <AnimatedSplash
      isLoaded={loading}
      logoImage={require("../images/splash.png")}
      backgroundColor={"#ffffff"}
      logoHeight={ScreenSize.width * 0.8}
      logoWidth={ScreenSize.height * 0.8}
    >
      <View style={styles.container}>
        <Text>Màn hình login</Text>
        <StatusBar style="auto" />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Đăng nhập"
          onPress={() =>
            navigation.navigate("LoginRole", {
              username: username,
              password: password,
            })
          }
        />
        <Button title="Đăng ký" onPress={() => navigation.navigate("SignUp")} />
        <Button
          title="Quên mật khẩu"
          onPress={() => navigation.navigate("ForgotPassword")}
        />
      </View>
    </AnimatedSplash>
  );
}

function LoginRole({ route, navigation }) {
  const { username, password } = route.params;
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.center}>
      <Text>Tư cách đăng nhập</Text>
      <Button
        title="Chủ trọ"
        onPress={() => signIn({ username, password, hostRole: true })}
      />
      <Button
        title="Khách trọ"
        onPress={() => signIn({ username, password, hostRole: false })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

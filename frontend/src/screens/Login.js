// Screen
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { ScreenSize } from "../utils";
// Handler
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HostStack } from "../navigation/Stack";

const AuthContext = React.createContext();

export function LoginHandler() {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
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
    }
  );
  
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {} 
      catch (e) {}
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            ) : (
            <Stack.Screen name="HostStack" component={HostStack} options={{ headerShown: false }}/>
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

  const [username, setUsername] = React.useState('username');
  const [password, setPassword] = React.useState('password');

  const { signIn } = React.useContext(AuthContext);

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
        onPress={() => signIn({ username, password })}
        />
      </View>
    
    </AnimatedSplash>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

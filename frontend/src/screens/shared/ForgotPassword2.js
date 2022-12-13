import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Color, ScreenSize } from '../../utils'
import { StepBar, ButtonFullWidth, InputOtp } from '../../components';

export function ForgotPassword2({ navigation }) {
  return (
    <View style={styles.container}>
      <StepBar step={2}></StepBar>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03}}>
        <Image 
          source={require("../../images/otp.png")}
          style={{width: ScreenSize.width * 0.34, height: ScreenSize.width * 0.29}}
        ></Image>
        <View style={{padding: ScreenSize.height * 0.04}}></View>
        <InputOtp></InputOtp>
      </View>
      
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <ButtonFullWidth content='Xác nhận' onPress={() => navigation.navigate("ForgotPassword3")}></ButtonFullWidth>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white_100,
    alignItems: 'center',
  },
});

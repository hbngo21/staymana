import * as React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import OTPInput from "react-native-otp";
import { Color, initializeFonts, TextStyle } from "../../utils";

const width = Dimensions.get("window").width;

export const InputOtp = (props) => {
  const [OTP, setOTP] = React.useState("");
  handleOTPChange = (otp) => {
    setOTP(otp);
  };
  initializeFonts();
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "column", marginBottom: 26 }}>
        <View style={{ marginBottom: 4 }}>
          <Text style={TextStyle.h2}>Xác thực Email</Text>
        </View>
        <Text style={[TextStyle.h4, { color: Color.grey_100 }]}>
          Nhập mã OTP được gửi đến email của bạn
        </Text>
      </View>
      <OTPInput
        label={props.title}
        value={OTP}
        onChange={handleOTPChange}
        tintColor={Color.primary_40}
        offTintColor={Color.grey_40}
        cellStyle={{
          width: (58 / 375) * width,
          height: 70,
          borderRadius: 8,
          fontSize: 30,
          backgroundColor: Color.white_100,
        }}
        otpLength={5}
      />
      <View style={{ marginTop: 12 }}>
        <Text style={TextStyle.h4}>
          <Text style={{ color: Color.grey_100 }}>
            Bạn chưa nhận được mã OTP?{" "}
          </Text>
          <Text style={{ color: Color.primary_100 }}>Gửi lại mã</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

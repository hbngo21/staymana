import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-paper";
import { Color, initializeFonts, TextStyle, ScreenSize } from "../../utils";

export const InputPassword = (props) => {
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  return (
    <KeyboardAvoidingView enabled>
      <TextInput
        label="Mật khẩu"
        placeholder="Vui lòng nhập mật khẩu"
        placeholderTextColor={Color.grey_100}
        mode="flat"
        value={password}
        outlineColor={Color.primary_100}
        activeOutlineColor={Color.primary_100}
        onChangeText={(password) => setPassword(password)}
        style={{
          ...TextStyle.h3,
          fontWeight: "400",
          color: Color.green_100,
          width: (327 / 375) * ScreenSize.width,
          backgroundColor: Color.white_100,
        }}
        secureTextEntry={passwordVisibility}
        right={
          <TextInput.Icon
            name={rightIcon}
            onPress={() => handlePasswordVisibility()}
          />
        }
        autoCorrect={false}
      />
    </KeyboardAvoidingView>
  );
};

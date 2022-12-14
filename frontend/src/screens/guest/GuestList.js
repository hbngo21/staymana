import React, {useState} from "react";
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, ScrollView, Pressable } from "react-native";
import { ButtonIcon, WelcomeText, HouseCard } from "../../components";
import { ButtonType, Color, customSize, ScreenSize, TextStyle } from "../../utils";
import { Avatar } from "react-native-paper";
import * as Cache from '../../services/'

export function GuestList({ navigation }) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState();
  Cache.get('USER_INFO').then((res) => {
    setName(JSON.parse(res).name);
    setAvatar(JSON.parse(res).image)
  }).catch((error) => console.log(error))
  const roomList = [
    {
      avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
      room: "Phòng 101",
      house: "Nhà trọ Hoa Mai",
      address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
    },
    {
      avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
      room: "Phòng 102",
      house: "Nhà trọ Hoa Đào",
      address: "48 Ba Tháng Hai, phường 11, quận 10, TP.HCM",
    },
  ]
  return (
    <SafeAreaView style={{ backgroundColor: Color.white_100, height: "100%"}}>
      <View style={{ marginHorizontal: customSize(24) }}>
        <View style={styles.header}>
          <View style={{ justifyContent: "flex-end", width: "50%" }}>
            <Image
              source={require("../../images/logo.png")}
              style={styles.logo}
            ></Image>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "50%",
            }}
          >
            <ButtonIcon
              type={ButtonType.OUTLINE}
              iconName="bell-outline"
              onPress={() => navigation.navigate("GuestNotification")}
            />
            <Pressable
              onPress={() => navigation.navigate("GuestProfile")}
              style={{ marginLeft: customSize(12) }}
            >
              <Avatar.Image
                size={customSize(40)}
                source={{uri: avatar}}
              />
            </Pressable>
          </View>
        </View>
        <WelcomeText name={name} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ paddingTop: 12, backgroundColor: Color.white_100}}>
        <View style={styles.center}>
          <View style={styles.title}>
            <Text style={TextStyle.h3}>Phòng trọ của bạn</Text>
          </View>
        </View>
          {roomList.map(room => (
            <Pressable onPress={() => navigation.navigate("GuestViewRoom", { name: room.room })}>
              <HouseCard avatar={room.avatar} name={room.room + " - " + room.house} address={room.address}/>
            </Pressable>
          ))}
          <View style={{height: 12}}></View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: customSize(54),
    flexDirection: "row",
    marginVertical: customSize(15),
  },
  logo: {
    width: customSize(71),
    height: "100%",
  },
  title: {
    width: 327 / 375 * ScreenSize.width,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 12,
  },
});
